import TableItem from "./TableItem";

function AdminSection() {
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
                    <TableItem />
                </tbody>
            </table>
        </div>
    )
}

export default AdminSection;