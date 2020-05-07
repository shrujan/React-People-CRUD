import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'regenerator-runtime/runtime';

import App from './container/App';
import Reducer from './Store/Reducers/Reducer';
import {fetchWeather} from './Store/Saga/WeatherSaga';

const sagaMiddleware = new createSagaMiddleware();

const store = new createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchWeather);


ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'))