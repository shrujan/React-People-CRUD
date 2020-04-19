import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './container/App';
import Reducer from './Store/Reducers/Reducer'

const store = new createStore(Reducer);



ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'))