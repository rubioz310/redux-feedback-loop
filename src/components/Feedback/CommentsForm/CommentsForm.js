import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

function CommentsForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const feedback = useSelector(store => store.feedbackReducer);
    //This will set current value of the rate if it has one otherwise it will default to ""
    const [comments, setComments] = useState(feedback.comments ? feedback.comments: "");

    const handleNext = () => {
        console.log(comments);
        dispatch({
            type: 'CHANGE_COMMENTS',
            payload: comments
        })
        history.push('/');
    }

    return (
        <div>
            <p>Any comments you want to leave?</p>
            <textarea value={comments} onChange={event => setComments(event.target.value)}/><br/>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default CommentsForm;