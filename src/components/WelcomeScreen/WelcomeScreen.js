import {useHistory} from 'react-router-dom';


function WelcomeScreen () {
    const history = useHistory();
    
    const handleStart = () =>{
        history.push("/feelingForm");
    }
    return (
        <div>
            <p>Pleas leave a feedback</p>
            <button onClick={handleStart}>Start</button>
        </div>
    )
}

export default WelcomeScreen;