import {combineReducers, createStore} from 'redux'

const rootReducer = combineReducers({
    state: stateReducer
})

export const store = createStore(rootReducer)