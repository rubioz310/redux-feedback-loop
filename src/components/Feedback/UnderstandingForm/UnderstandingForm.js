import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function UnderstandingForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const feedback = useSelector(store => store.feedbackReducer);
    //This will set current value of the rate if it has one otherwise it will default to "3"
    const [understandingRate, setUnderstandingRate] = useState(feedback.understanding ? feedback.understanding: "3");

    const handleNext = () => {
        console.log(understandingRate);
        dispatch({
            type: 'CHANGE_UNDERSTANDING_RATE',
            payload: understandingRate
        })
        history.push('/supportForm');
    }

    return (
        <div>
            <p>How are you understanding the content?</p>
            <p>{understandingRate}</p>
            <input type="range" min="1" max="5" value={understandingRate} onChange={event => setUnderstandingRate(event.target.value)}/><br/>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default UnderstandingForm;