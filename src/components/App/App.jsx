import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

//Components imports
import Header from '../Header/Header';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import FeelingForm from '../Feedback/FeelingForm/FeelingForm';
import UnderstandingForm from '../Feedback/UnderstandingForm/UnderstandingForm';
import SupportForm from '../Feedback/SupportForm/SupportForm';
import CommentsForm from '../Feedback/CommentsForm/CommentsForm';
import ReviewScreen from '../Feedback/ReviewScreen/ReviewScreen';
import ThankyouScreen from '../ThankyouScreen/ThankyouScreen';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path = "/" component={WelcomeScreen} />
        <Route exact path="/feelingForm/:direction" component={FeelingForm} />
        <Route exact path="/understandingForm" component={UnderstandingForm} />
        <Route exact path="/supportForm" component={SupportForm} />
        <Route exact path="/commentsForm" component={CommentsForm} />
        <Route exact path="/reviewScreen" component={ReviewScreen} />
        <Route exact path="/thankyouScreen" component={ThankyouScreen} />

      </Router>
    </div>
  );
}

export default App;
