import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function FeelingForm(){
    const history = useHistory();
    const dispatch = useDispatch();

    const feedback = useSelector(store => store.feedbackReducer);
    //This will set current value of the rate if it has one otherwise it will default to "3"
    const [feelingRate, setFeelingRate] = useState(feedback.feeling ? feedback.feeling: "3");

    const handleNext = () => {
        console.log(feelingRate);
        dispatch({
            type: 'CHANGE_FEELING_RATE',
            payload: feelingRate
        })
        history.push('/understandingForm');
    }

    return (
        <div>
            <p>How are you feeling today?</p>
            <p>{feelingRate}</p>
            <input type="range" min="1" max="5" value={feelingRate} onChange={event => setFeelingRate(event.target.value)}/><br/>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default FeelingForm;