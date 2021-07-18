function TableItem({ feedback, deleteFeedback }) {


    const handleDelete = () => {
        deleteFeedback(feedback.id)
    }
    return (
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><button>Flag</button></td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
        
    )
}

export default TableItem;