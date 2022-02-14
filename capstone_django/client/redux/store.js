import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { } from '.'

const initialState= { }

const middleware =  [thunk]

const store = createStore(reducer, initialState, composedWithDevTools(applyMiddleware(...middleware)))