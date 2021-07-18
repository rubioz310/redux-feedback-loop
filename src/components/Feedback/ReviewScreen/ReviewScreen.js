import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { Fade } from '@material-ui/core';

function ReviewScreen(){
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

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
      const handleReset = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: {}
        })
        history.push('/');
    }

    return (
        <div>
            <Fade in={true}>
                <div>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubmit}>Submit Feedback</button>
            </div>
            </Fade>
        </div>
    )
}

export default ReviewScreen;