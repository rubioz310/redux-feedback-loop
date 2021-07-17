import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingForm(){
    const [feelingRate, setFeelingRate] = useState("3");

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
        console.log(feelingRate);
        dispatch({
            type: 'CHANGE_FEELING_RATE',
            payload: feelingRate
        })
        history.push('/');
    }

    return (
        <div>
            <p>How are you feeling today?</p>
            <p>{feelingRate}</p>
            <input type="range" min="1" max="5" value={feelingRate} onChange={event => setFeelingRate(event.target.value)}/><br/>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default FeelingForm;