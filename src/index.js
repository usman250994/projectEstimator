import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk, logger()));

ReactDOM.render(
(<Provider store={store}>
    <App/>
</Provider>)
, document.getElementById('root'));
registerServiceWorker();
