import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

//Components imports
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Header from '../Header/Header';
import FeelingForm from '../Feedback/FeelingForm/FeelingForm';
import UnderstandingForm from '../Feedback/UnderstandingForm/UnderstandingForm';
import SupportForm from '../Feedback/SupportForm/SupportForm';
import CommentsForm from '../Feedback/CommentsForm/CommentsForm';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path = "/" component={WelcomeScreen} />
        <Route exact path="/feelingForm" component={FeelingForm} />
        <Route exact path="/understandingForm" component={UnderstandingForm} />
        <Route exact path="/supportForm" component={SupportForm} />
        <Route exact path="/commentsForm" component={CommentsForm} />

      </Router>
    </div>
  );
}

export default App;
