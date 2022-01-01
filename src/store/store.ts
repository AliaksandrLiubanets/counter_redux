import {combineReducers, createStore} from 'redux'
import {stateReducer} from './stateReducer'

const rootReducer = combineReducers({
    state: stateReducer
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>