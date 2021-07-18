import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux"

//Material-ui imports
import { Paper, Slide } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function CommentsForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    const {direction} = useParams();

    //This will set current value of the rate if it has one otherwise it will default to ""
    const feedback = useSelector(store => store.feedbackReducer);
    const [commentsRate, setCommentsRate] = useState(feedback.comments ? feedback.comments: "");

    const handleNext = () => {
        dispatch({
            type: 'CHANGE_COMMENTS',
            payload: commentsRate
        })
        history.push('/reviewScreen/left');
    }
    const handlePrevious = () => {
        dispatch({
            type: 'CHANGE_COMMENTS',
            payload: commentsRate
        })
        history.push('/supportForm/right');
    }

    return (
        <Slide in={true} direction={direction}>
            <Paper className="formContainer" elevation={6}>
                <h3>Any comments you want to leave?</h3>
                <div>
                    <TextField
                        label="Comments"
                        multiline
                        variant="filled"
                        value={commentsRate}
                        maxRows="2"
                        fullWidth="true"
                        autoFocus="true"
                        onChange={event => setCommentsRate(event.target.value)}
                    />
                </div>
                <div className="previousBtn"><Button variant="contained" color="primary" size="small" onClick={handlePrevious}>Back</Button></div>
                <div className="nextBtn"><Button variant="contained" color="primary" size="small" onClick={handleNext}>Next</Button></div>
            </Paper>
        </Slide>
    )
}

export default CommentsForm;