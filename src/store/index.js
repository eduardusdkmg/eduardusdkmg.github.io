import {createStore, combineReducers} from 'redux'
import * as actionTypes from './actions/actionTypes'

const intitialStateTodos = {
    todos : []
}
const intitialStateNotes = {
    notes : []
}

const todoReducer = (state = intitialStateTodos, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos : [ ...state.todos, action.payload]
            }
        case actionTypes.EDIT_TODO :
            let todos = [...state.todos]
            let index = action.payload.index
            let todo = action.payload.todo
            todos[index] = todo
            return {
                ...state,
                todos
            }
        case actionTypes.DELETE_TODO:
            let newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos : newTodos
            }
        default:
            return state
    }
}

const noteReducer = (state = intitialStateNotes, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes : [ ...state.notes, action.payload]
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todoReducer: todoReducer, 
    noteReducer: noteReducer
})

const store = createStore(rootReducer)

export default store