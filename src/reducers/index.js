import {ADD_USER} from '../actions';

const initialState = {
    isWorking: true,
    loggedIn: false,
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
    }
}

export default reducer;