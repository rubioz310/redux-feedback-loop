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
            <td><button onClick={handleFlag}>Flag</button></td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
        
    )
}

export default TableItem;