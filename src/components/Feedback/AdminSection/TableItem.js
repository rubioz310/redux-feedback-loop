//Material-ui imports
import { DeleteForever,Flag,FlagOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";


function TableItem({ feedback, deleteFeedback, flagFeedback }) {
    const handleDelete = () => {
        deleteFeedback(feedback.id)
    }
    const handleFlag = () => {
        flagFeedback(feedback.id, {flag: !feedback.flagged});
    }
    return (
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><IconButton onClick={handleFlag} color="primary">{feedback.flagged ? <Flag/>:<FlagOutlined/>}</IconButton></td>
            <td><IconButton onClick={handleDelete} color="secondary"><DeleteForever/> </IconButton> </td>
        </tr>
        
    )
}

export default TableItem;