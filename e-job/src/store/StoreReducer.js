const initialStore = 0

const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout'
}



const storeReducer = (state, action) => {
    console.log(action.type)
    switch(action.type){
        case types.authLogout:
            return state=0

        case types.authLogin:
            console.log("entre a este tipo")
            return action.payload
        default:
            return state;
    }
}

export {initialStore, types}

export default storeReducer