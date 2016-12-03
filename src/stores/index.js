import {applyMiddleware, createStore} from 'redux';
import reducer from './combineReducer';
import thunk from 'redux-thunk';

export default function (initialState) {
    return createStore(reducer, initialState, applyMiddleware(thunk));
}