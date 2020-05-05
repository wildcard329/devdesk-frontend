import Axios from "axios";

export const ADD_USER = "ADD_USER";
export const GET_TICKETS = "GET_TICKETS";

export const addUser = (data) => dispatch => {
    Axios.post('https://bw-node.herokuapp.com/auth/register')
    dispatch({type: ADD_USER, payload: data})
}