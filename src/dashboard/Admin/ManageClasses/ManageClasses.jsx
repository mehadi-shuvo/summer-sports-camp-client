import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/class');
        return res.data
    })

    const ApprovedHandler = (id) => {
        axiosSecure.put(`/class/approve/${id}`)
            .then(res => {
                console.log('success', res);
                refetch()
            })
            .catch(error => {
                console.log(error);
            })


    }
    const DenyHandler = (id) => {

        axiosSecure.put(`/class/deny/${id}`)
            .then(res => {
                console.log('success', res);
                refetch()
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div>
            mange {classes.length} class

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-orange-500 uppercase text-lg">
                                <th>
                                    #
                                </th>
                                <th>Item</th>
                                <th>Instructor</th>
                                <th>status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((row, index) => <tr key={row._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-orange-500">{row.className}</div>
                                                <div className="text-sm text-slate-600">Available Seats: {row.seats}</div>
                                                <div className="text-sm text-slate-600">Enrolled Price: ${row.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left">
                                        <p className="text-base text-slate-700 font-bold capitalize">{row.name}</p>
                                        <p className="text-base text-slate-700 font-light">{row.email}</p>
                                    </td>
                                    <td className="uppercase text-slate-700">{row.status}</td>
                                    <th className="flex justify-around items-center">
                                        <button
                                            disabled={row.status === 'approved' || row.status === 'denied'}
                                            onClick={() => ApprovedHandler(row._id)}
                                            className="btn btn-xs bg-orange-500 text-white px-3 hover:bg-orange-700 ">Approve</button>

                                        <button
                                            disabled={row.status === 'denied' || row.status === 'approved'}
                                            onClick={() => DenyHandler(row._id)}
                                            className="btn btn-xs bg-orange-500 text-white px-3 hover:bg-orange-700 ">Deny</button>

                                        <Link
                                            to={`/dashboard/feedback/${row._id}`}
                                            className="btn btn-xs bg-orange-500 text-white px-3 hover:bg-orange-700 ">Feedback</Link>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default ManageClasses;