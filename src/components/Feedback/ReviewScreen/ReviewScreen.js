import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function ReviewScreen(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const feedback = useSelector(store => store.feedbackReducer);

    const handleSubmit = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: {}
        })
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