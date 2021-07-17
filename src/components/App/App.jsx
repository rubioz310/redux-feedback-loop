import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

//Components imports
import Header from '../Header/Header';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import FeelingForm from '../Feedback/FeelingForm/FeelingForm';
import UnderstandingForm from '../Feedback/UnderstandingForm/UnderstandingForm';
import SupportForm from '../Feedback/SupportForm/SupportForm';
import CommentsForm from '../Feedback/CommentsForm/CommentsForm';
import ReviewScreen from '../Feedback/ReviewScreen/ReviewScreen';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  const uploadFeedback = (feedback) => {
    axios.post('/feedback/upload', feedback)
    .then (response => {
      console.log('Feedback uploaded');
      dispatch({
        type: 'CLEAR_FEEDBACK',
        payload: {}
      })
    }) .catch (error =>{
      console.log('Error submitting feedback', error);
    })
  }
  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path = "/" component={WelcomeScreen} />
        <Route exact path="/feelingForm" component={FeelingForm} />
        <Route exact path="/understandingForm" component={UnderstandingForm} />
        <Route exact path="/supportForm" component={SupportForm} />
        <Route exact path="/commentsForm" component={CommentsForm} />
        <Route exact path="/ReviewScreen">
          <ReviewScreen uploadFeedback={uploadFeedback} />
        </Route>

      </Router>
    </div>
  );
}

export default App;
