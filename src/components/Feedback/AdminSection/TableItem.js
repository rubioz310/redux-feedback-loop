//Material-ui imports
import { DeleteForever,Flag,FlagOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

//Imports for dialog box
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from "react";

function TableItem({ feedback, deleteFeedback, flagFeedback }) {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        deleteFeedback(feedback.id)
    }
    const handleFlag = () => {
        flagFeedback(feedback.id, {flag: !feedback.flagged});
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><IconButton onClick={handleFlag} color="primary">{feedback.flagged ? <Flag/>:<FlagOutlined/>}</IconButton></td>
            <td><IconButton onClick={handleClickOpen} color="secondary"><DeleteForever/> </IconButton> </td>
        </tr>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Delete feedback</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Once deleted you would not be able to recover it
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    No
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default TableItem;