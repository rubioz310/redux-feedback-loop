import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function SupportForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const feedback = useSelector(store => store.feedbackReducer);
    //This will set current value of the rate if it has one otherwise it will default to "3"
    const [supportRate, setSupportRate] = useState(feedback.support ? feedback.support: "3");

    const handleNext = () => {
        dispatch({
            type: 'CHANGE_SUPPORT_RATE',
            payload: supportRate
        })
        history.push('/commentsForm');
    }
    const handlePrevious = () => {
        history.push('/understandingForm');
    }

    return (
        <div>
            <p>How well are you being supported?</p>
            <p>{supportRate}</p>
            <input type="range" min="1" max="5" value={supportRate} onChange={event => setSupportRate(event.target.value)}/><br/>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default SupportForm;