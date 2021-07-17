import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Header from '../Header/Header';
import FeelingForm from '../Feedback/FeelingForm/FeelingForm';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path = "/" component={WelcomeScreen} />
        <Route exact path="/feelingForm" component={FeelingForm} />
      </Router>
    </div>
  );
}

export default App;
