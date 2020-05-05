import axios from "axios";
import axiosWithAuth from "../utils/axioswithauth.js";


export const REQUEST_USER = "REQUEST_USER";
export const ADD_USER = "ADD_USER";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const USER_LOGIN = "USER_LOGIN";
export const GET_TICKETS = "GET_TICKETS";

export const requestUser = (registration) => dispatch => {
    axios.post('https://bw-node.herokuapp.com/auth/register', registration)
        .then(registration => dispatch({type: ADD_USER, payload: registration}))
        .catch(err => console.error(err, 'err', err.message))
}

export const requestLogin = (credentials) => dispatch => {
    axios.post('https://bw-node.herokuapp.com/auth/login', credentials)
        .then(credentials => dispatch({type: USER_LOGIN, payload: credentials}))
        .catch(err => console.error(err, 'err', err.message))
}