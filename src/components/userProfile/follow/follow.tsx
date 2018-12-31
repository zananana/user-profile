import * as React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {updateUser} from 'src/actions/userActions';
import IUser from 'src/interfaces/IUser';
import './follow.scss';

export interface IFollowProps {
    user: IUser;
    updateUser: (user: IUser) => void;
}

export class Follow extends Component<IFollowProps> {
    state = { 
        isFollowed: false
     }

     onClick = () => {
        const isFollowed = !this.state.isFollowed;
        this.setState({isFollowed});

        this.updateUser();
    }

    updateUser = () => {
        const { user } = this.props;
        !this.state.isFollowed ? user.following++ : user.following--;
        this.props.updateUser(user);
    }

    render() { 
        let className = "follow-btn";
        if(this.state.isFollowed) {
            className += " followed";
        }
        return ( 
            <button  className={className} type="button" onClick={this.onClick}>
            {this.state.isFollowed ? "Followed" : "Follow"}</button>
         );
    }
}
 
const mapStateToProps = (state: any) => ({
    user: state.users.user
})
 
export default connect(mapStateToProps, { updateUser })(Follow);