import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux"

//Material-ui imports
import { Slider, Paper, Slide } from '@material-ui/core';
import { Mood, MoodBad } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

function SupportForm(){
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
    const [supportRate, setSupportRate] = useState(feedback.support ? feedback.support: 3);

    const handleNext = () => {
        dispatch({
            type: 'CHANGE_SUPPORT_RATE',
            payload: supportRate
        })
        history.push('/commentsForm/left');
    }
    const handlePrevious = () => {
        history.push('/understandingForm/right');
    }

    return (
        <Slide in={true} direction={direction}>
            <Paper className="formContainer" elevation={6}>
                <h3>How well are you being supported?</h3>
                <p>{supportRate}</p>
                <Slider 
                    value={supportRate}
                    marks = {marks}
                    min={1}
                    max={5}
                    track={false}
                    onChange={(event, value) => setSupportRate(value)}
                />
                <div className="previousBtn"><Button variant="contained" color="primary" size="small" onClick={handlePrevious}>Back</Button></div>
                <div className="nextBtn"><Button variant="contained" color="primary" size="small" onClick={handleNext}>Next</Button></div>
            </Paper>
        </Slide>
    )
}

export default SupportForm;