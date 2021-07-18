import {useHistory} from 'react-router-dom';
import { Fade } from '@material-ui/core';

function WelcomeScreen () {
    const history = useHistory();
    
    const handleStart = () =>{
        history.push("/feelingForm");
    }
    return (
        <Fade in={true}>
            <div>
                <p>Please leave a feedback</p>
                <button onClick={handleStart}>Start</button>
            </div>
        </Fade>
    )
}

export default WelcomeScreen;