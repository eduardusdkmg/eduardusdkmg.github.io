const redux = require('redux')

var initialState = {
    loggedIn: false,
    username: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_SUCCESS" : 
            return {
                ...state,
                loggedIn : true,
                username : action.payload.username
            }
        default : 
            return state
    }
}

const createStore = redux.createStore

const store = createStore(rootReducer)

store.subscribe( () => {
    console.log('subscription',store.getState())
})


console.log(store.getState())

const actionLoginSuccess = {
    type : "LOGIN_SUCCESS",
    payload : {
        username : 'edubrooo'
    }
}


let componentDefault = store.dispatch(actionLoginSuccess);

console.log('after dispatch', store.getState())

