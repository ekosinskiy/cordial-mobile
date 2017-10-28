import { AppRegistry } from 'react-native';

import React, {Component} from 'react';

import AppContainer from './app/Containers/AppContainer';
import reducer from './app/Reducers';
import {Provider} from  'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';


function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware
        )
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


const App = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
);

AppRegistry.registerComponent('cordial', () => App);
