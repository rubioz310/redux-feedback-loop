import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import axios from 'axios';

function ReviewScreen(){
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

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

    return (
        <div>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>

            <button onClick={handleSubmit}>Submit Feedback</button>
        </div>
    )
}

export default ReviewScreen;