import {ADD_USER, GET_TICKETS} from '../actions';

const initialState = {
    tickets: [],
    currentUser: {}
}

const reducer = (state = initialState, action) => {
    console.log('reducer',state)
    switch(action.type) {
        case ADD_USER:
            
            localStorage.setItem("token")
            return {
                ...state,
                currentUser: action.payload
            }
        case GET_TICKETS:
            console.log('reducer', state)
            return {
                ...state,
                tickets: action.payload
            }
    }
}

export default reducer;