import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components imports
import Header from '../Header/Header';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import FeelingForm from '../Feedback/FeelingForm/FeelingForm';
import UnderstandingForm from '../Feedback/UnderstandingForm/UnderstandingForm';
import SupportForm from '../Feedback/SupportForm/SupportForm';
import CommentsForm from '../Feedback/CommentsForm/CommentsForm';
import ReviewScreen from '../Feedback/ReviewScreen/ReviewScreen';
import ThankyouScreen from '../ThankyouScreen/ThankyouScreen';
import AdminSection from '../Feedback/AdminSection/AdminSection';

function App() {
  const dispatch = useDispatch(); 

  const getFeedbacks = () => {
    axios.get('/feedback')
    .then(response => {
      dispatch({
          type: "GET_FEEDBACKS",
          payload: response.data
      })
    })
  } 

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path = "/" component={WelcomeScreen} />
        <Route exact path="/feelingForm/:direction" component={FeelingForm} />
        <Route exact path="/understandingForm/:direction" component={UnderstandingForm} />
        <Route exact path="/supportForm/:direction" component={SupportForm} />
        <Route exact path="/commentsForm/:direction" component={CommentsForm} />
        <Route exact path="/reviewScreen/:direction" component={ReviewScreen} />
        <Route exact path="/thankyouScreen" component={ThankyouScreen} />
        <Route exact path="/admin">
          <AdminSection getFeedbacks={getFeedbacks}/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
