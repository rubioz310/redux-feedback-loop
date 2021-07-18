import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux"

//Material-ui imports
import { Slider, Paper, Slide } from '@material-ui/core';
import { Mood, MoodBad } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

function UnderstandingForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    const {direction} = useParams();

    //This will show the icons at the extremes of the slider as long as marks for each value
    const marks = [
        {
            value: 1,
            label: <MoodBad />
        },
        { value : 2},
        { value : 3},
        { value : 4},
        {
            value: 5,
            label: <Mood />
        }
    ]

    //This will set current value of the rate if it has one otherwise it will default to 3
    const feedback = useSelector(store => store.feedbackReducer);
    const [understandingRate, setUnderstandingRate] = useState(feedback.understanding ? feedback.understanding: 3);

    const handleNext = () => {
        dispatch({
            type: 'CHANGE_UNDERSTANDING_RATE',
            payload: understandingRate
        })
        history.push('/supportForm/left');
    }
    const handlePrevious = () => {
        history.push('/feelingForm/right');
    }

    return (
        <Slide in={true} direction={direction}>
            <Paper className="formContainer" elevation={6}>
                <h3>How well are you understanding the content?</h3>
                <p>{understandingRate}</p>
                <Slider 
                    value={understandingRate}
                    marks = {marks}
                    min={1}
                    max={5}
                    track={false}
                    onChange={(event, value) => setUnderstandingRate(value)}
                />
                <div className="previousBtn"><Button variant="contained" color="primary" size="small" onClick={handlePrevious}>Back</Button></div>
                <div className="nextBtn"><Button variant="contained" color="primary" size="small" onClick={handleNext}>Next</Button></div>
            </Paper>
        </Slide>
    )
}

export default UnderstandingForm;