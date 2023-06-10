import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment/moment";


const EnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/enroll/${user.email}`)
        return res.data
    })
    return (
        <div>
            <h4 className="py-10 text-center text-4xl font-bold text-orange-500">Enrolled Classes</h4>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Enrolled Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((row, index) => <tr key={row._id}>
                                    <th>{index + 1}</th>
                                    <td>{row.className}</td>
                                    <td>
                                        {row.instructorName}
                                    </td>
                                    <td>{row.instructorEmail}</td>
                                    <td>{moment(row.date).format('MMMM Do YYYY') }</td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default EnrolledClasses;