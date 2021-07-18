import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
import { Fade, Slider } from '@material-ui/core';

function FeelingForm(){
    const history = useHistory();
    const dispatch = useDispatch();

    const feedback = useSelector(store => store.feedbackReducer);
    //This will set current value of the rate if it has one otherwise it will default to "3"
    const [feelingRate, setFeelingRate] = useState(feedback.feeling ? feedback.feeling: 3);

    const handleNext = () => {
        dispatch({
            type: 'CHANGE_FEELING_RATE',
            payload: feelingRate
        })
        history.push('/understandingForm');
    }

    return (
        <Fade in={true}>
            <div className="formContainer">
                <p>How are you feeling today?</p>
                <p>{feelingRate}</p>
                <Slider 
                    value={feelingRate}
                    marks
                    min={1}
                    max={5}
                    onChange={(event, value) => setFeelingRate(value)}
                />
                <button onClick={handleNext}>Next</button>
            </div>
        </Fade>
    )
}

export default FeelingForm;