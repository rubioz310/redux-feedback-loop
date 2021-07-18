import {useHistory} from 'react-router-dom';
import { Button, Fade, Paper } from '@material-ui/core';

function WelcomeScreen () {
    const history = useHistory();
    
    const handleStart = () =>{
        history.push("/feelingForm/left");
    }
    return (
        <Fade in={true}>
            <Paper className="formContainer" elevation={6}>
                <div>
                    <p>Please leave a feedback</p>
                </div>
                <Button variant="contained" color="primary" size="small" onClick={handleStart}>Start</Button>
            </Paper>
        </Fade>
    )
}

export default WelcomeScreen;