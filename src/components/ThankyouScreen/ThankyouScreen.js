import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

//Material-ui imports
import { Paper, Fade } from '@material-ui/core';
import Button from "@material-ui/core/Button";

function ThankyouScreen() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: {}
          })
          history.push('/')
    }
    return(
        <Fade in={true}>
            <Paper className="formContainer" elevation={6}>
                <div>
                    <p>Thank you for your feedback!</p>
                </div>
                <Button variant="contained" color="primary" size="small" onClick={handleClick}>Home</Button>
            </Paper>
        </Fade>
    )
}

export default ThankyouScreen;