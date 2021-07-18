import { useEffect } from "react";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";

//Imports for material-ui table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function AdminSection({ getFeedbacks, deleteFeedback, flagFeedback }) {
    useEffect(()=> {
        getFeedbacks();
      },[]);
    
    const feedbacks = useSelector(store => store.feedbackListReducer);
    return (
        <TableContainer component={Paper}>
            <Table size="small" >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Feeling</TableCell>
                        <TableCell align="center">Comprehension</TableCell>
                        <TableCell align="center">Support</TableCell>
                        <TableCell align="center">Comments</TableCell>
                        <TableCell align="center">Flag</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedbacks.map(feedback => (
                        <TableItem 
                            key={feedback.id}
                            feedback={feedback}
                            deleteFeedback={deleteFeedback}
                            flagFeedback={flagFeedback}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdminSection;