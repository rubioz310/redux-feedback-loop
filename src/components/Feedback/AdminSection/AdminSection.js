import { useEffect } from "react";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";

function AdminSection({ getFeedbacks }) {
    useEffect(()=> {
        getFeedbacks();
      },[]);
    
    const feedbacks = useSelector(store => store.feedbackListReducer);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map(feedback => (
                        <TableItem feedback={feedback} key={feedback.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminSection;