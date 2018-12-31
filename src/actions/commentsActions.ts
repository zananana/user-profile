import IComment from '../interfaces/IComment';
import * as axios from 'axios';
import { GET_COMMENTS, ADD_COMMENT } from './types/types';

const url: string = 'http://localhost:3000/comments.json';
// for ngrok:
// const url: string = 'http://xxx.ngrok.io/comments.json';

export const getComments = () => dispatch => {

    return axios.default.get(url)
    .then( response =>
        dispatch({
            type: GET_COMMENTS,
            payload: response.data
        })
    );
}

export const addComments = (comment: IComment) => dispatch => {

    const dispatchData: { type: string, payload: IComment } = {
        type: ADD_COMMENT,
        payload: comment
    };

    dispatch(dispatchData);
}