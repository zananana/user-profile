import { GET_COMMENTS, ADD_COMMENT } from '../actions/types/types';

const initialState: { comments: any[] } = {
    comments: []
}

export default function(state = initialState, action: any) {
    switch(action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        default:
            return state;
    }
}