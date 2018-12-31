import { GET_USER, UPDATE_USER } from '../actions/types/types';

const initialState = {
    user: {}
}

export default function(state = initialState, action: any) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_USER:
        const oldState = Object.assign({}, state);
            return {
                ...state,
                user: Object.assign(oldState, action.payload)
            };
        default:
            return state;
    }
}