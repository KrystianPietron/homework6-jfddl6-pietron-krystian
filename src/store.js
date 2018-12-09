import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import todo from './state/todo'
import auth from './state/auth'
import register from './state/register'
import filterTask from './state/filterTask'
import search from './state/search'

const reducer = combineReducers({
    auth,
    todo,
    search,
    register,
    filterTask,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)