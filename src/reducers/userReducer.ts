import { GET_USER, UPDATE_USER } from '../actions/types/types';

const initialState = {
    user: {}
}

export default function(state = initialState, action: any) {
    switch(action.type) {
        case GET_USER:
        console.log('GET_USERS', action.payload);
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_USER:
        console.log('UPDATE_USER', action.payload);
        const oldState = Object.assign({}, state);
            return {
                ...state,
                user: Object.assign(oldState, action.payload)
            };
        default:
            return state;
    }
}