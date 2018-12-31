import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { updateUser } from 'src/actions/userActions';
import IUser from 'src/interfaces/IUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import './like.scss';

interface ILikeProps {
    user: IUser;
    updateUser: (user: IUser) => void;
}

export class Like extends Component<ILikeProps> {
    state = { 
        isLiked: false
     }

     onClick = () => {
        const isLiked = !this.state.isLiked;
        this.setState({isLiked});

        this.updateUser();
    }

    updateUser = () => {
        const { user } = this.props;
        !this.state.isLiked ? user.likesNum++ : user.likesNum--;
        this.props.updateUser(user);
    }

    render() { 
        return ( 
            <button 
                className='like-btn' 
                type='button' 
                onClick={this.onClick}>
                    <FontAwesomeIcon style={{color:'#d3d3d3'}} size='2x' icon={this.state.isLiked? faHeart : fasHeart } />
            </button>
         );
    }
}

const mapStateToProps = (state: any) => ({
    user: state.users.user
})

export default connect(mapStateToProps, { updateUser })(Like);