import * as React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../actions/userActions';
import IUser from '../../interfaces/IUser';
import Like from './like/like';
import Follow from './follow/follow';
import Stat from './stat/stat';
import Modal from 'src/common/modal/modal';
import './userProfile.scss';

interface IProps {
    user: IUser;
    getUser: () => void;
}

export class UserProfile extends Component<IProps> {

    componentDidMount() {
        this.props.getUser();
    }

    renderStat(data, label) {
        return ( 
            <Stat 
                data={data}
                label={label}
            /> 
        );
    }

    render() {  
        const { firstName, lastName, city, country, likesNum, followers, following, avatarUrl, profileUser } = this.props.user;
        const styles = {
            avatar: {
                backgroundImage: `url(${avatarUrl})`
            }
        }

        return (
            <React.Fragment>
                <div className='wrapper' id='userProfile'>   
                    <Modal data={profileUser} />
                    <div className='avatar' style={styles.avatar}>&nbsp;</div>
                    <div className='name'>
                        {firstName} {lastName} 
                        <Like />
                    </div>
                    <div className='location'>
                        {city}, {country}
                    </div>
                    <div className='stats'>
                        {this.renderStat(likesNum, 'Likes')}
                        {this.renderStat(followers, 'Following')}
                        {this.renderStat(following, 'Followers')}
                    </div>
                    <Follow />
                </div>
            </React.Fragment>
         );
    }
}

const mapStateToProps = (state: any) => ({
    user: state.users.user
})

export default connect(mapStateToProps, { getUser })(UserProfile);