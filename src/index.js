import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux stuff
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


//Feedback reducer
const feedbackReducer = (state = {}, action) => {
    switch (action.type){
        case "CHANGE_FEELING_RATE":
            return {...state,feeling: action.payload};
        case "CHANGE_UNDERSTANDING_RATE":
            return {...state,understanding: action.payload};
        case "CHANGE_SUPPORT_RATE":
            return {...state,support: action.payload};
        case "CHANGE_COMMENTS":
            return {...state,comments: action.payload};
        case "CLEAR_FEEDBACK":
            return action.payload;
        default:
            return state;
    }
}

//Store creation
let storeInstance= createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}> <App />  </Provider>, document.getElementById('root'));
registerServiceWorker();

