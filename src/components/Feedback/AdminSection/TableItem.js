import { useState } from "react";

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

//Imports for table
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


function TableItem({ feedback, deleteFeedback, flagFeedback }) {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        deleteFeedback(feedback.id)
    }
    const handleFlag = () => {
        flagFeedback(feedback.id, {flag: !feedback.flagged});
    }

    //This two are for opening and closing dialog alert
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
        <TableRow>
            <TableCell align="center">{feedback.feeling}</TableCell>
            <TableCell align="center">{feedback.understanding}</TableCell>
            <TableCell align="center">{feedback.support}</TableCell>
            <TableCell align="center">{feedback.comments}</TableCell>
            <TableCell align="center">
                <IconButton onClick={handleFlag} color="primary">
                    {feedback.flagged ? <Flag/>:<FlagOutlined/>}
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <IconButton onClick={handleClickOpen} color="secondary">
                    <DeleteForever/> 
                </IconButton> 
            </TableCell>
        </TableRow>

        {/* Dialog alert when deleting feedback */}
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