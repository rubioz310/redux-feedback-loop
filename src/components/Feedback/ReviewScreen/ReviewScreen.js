import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import axios from "axios";

//Material-ui imports
import { Paper, Slide } from '@material-ui/core';
import Button from "@material-ui/core/Button";

function ReviewScreen(){
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const {direction} = useParams();

    const handleSubmit = () => {
        uploadFeedback(feedback)
    }
    const uploadFeedback = (feedback) => {
        axios.post('/feedback/upload', feedback)
        .then (response => {
            history.push('/thankyouScreen');
        }) .catch (error =>{
            alert('Error submitting feedback');
        })
      }
    const handlePrevious = () => {
        history.push('/commentsForm/right');
    }

    return (
        <Slide in={true} direction={direction}>
            <Paper className="formContainer" elevation={6}>
                <div>
                    <p>Feelings: {feedback.feeling}</p>
                    <p>Understanding: {feedback.understanding}</p>
                    <p>Support: {feedback.support}</p>
                    <p>Comments: {feedback.comments}</p>
                </div>
                <div className="previousBtn"><Button variant="contained" color="primary" size="small" onClick={handlePrevious}>Back</Button></div>
                <div className="nextBtn"><Button variant="contained" color="primary" size="small" onClick={handleSubmit}>Submit feedback</Button></div>
            </Paper>
        </Slide>
    )
}

export default ReviewScreen;