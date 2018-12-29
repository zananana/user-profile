import { combineReducers } from 'redux';
import userReducer from './userReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    users: userReducer,
    comments: commentsReducer
})