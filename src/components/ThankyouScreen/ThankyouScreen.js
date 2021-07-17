import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

function ThankyouScreen() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: {}
          })
          history.push('/feelingForm')
    }
    return(
        <div>
            <p>Thank you for your feedback!</p>
            <button onClick={handleClick}>Leave new Feedback</button>
        </div>
    )
}

export default ThankyouScreen;