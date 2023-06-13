import moment from "moment";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";


const MyPayments = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [] } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/payment-history/${user.email}`)
        return res.data
    })


    return (
        <div>
            <Helmet>
                <title>Student | Payments</title>
            </Helmet>
            <h4 className="py-10 text-center text-4xl font-bold text-orange-500">Payments History</h4>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Transition ID</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((row, index) => <tr key={row._id}>
                                    <th>{index + 1}</th>
                                    <td>{row.className}</td>
                                    <td>{row.instructorName}</td>
                                    <td>
                                        {row.transitionId}
                                    </td>
                                    <td>{moment(row.date).format('MMMM Do YYYY')}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPayments;