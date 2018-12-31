import IUser from '../interfaces/IUser';
import * as axios from "axios";
import { GET_USER, UPDATE_USER } from './types/types';

const url: string = 'http://localhost:3000/user.json';
// for ngrok tests:
// const url: string = 'http://xxx.ngrok.io/user.json';

export const getUser = () => dispatch => {
    return axios.default.get(url)
    .then(response => 
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    );
}

export const updateUser = (user: IUser) => dispatch => {

    const dispatchData: { type: string, payload: IUser } = {
        type: UPDATE_USER,
        payload: user
    };

    dispatch(dispatchData);
}