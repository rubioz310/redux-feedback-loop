import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function ReviewScreen({ uploadFeedback }){
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

    const handleSubmit = () => {
        uploadFeedback(feedback);
        history.push('/');
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