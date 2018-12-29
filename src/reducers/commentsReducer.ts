import { GET_COMMENTS, ADD_COMMENT } from '../actions/types/types';

const initialState: { comments: any[] } = {
    comments: []
}

export default function(state = initialState, action: any) {
    switch(action.type) {
        case GET_COMMENTS:
        console.log('GET_COMMENTS', action.payload);
            return {
                ...state,
                comments: action.payload
            };
        case ADD_COMMENT:
        console.log('ADD_COMMENT', action.payload);
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        default:
            return state;
    }
}