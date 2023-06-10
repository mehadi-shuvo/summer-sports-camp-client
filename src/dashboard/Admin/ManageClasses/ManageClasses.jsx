import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/class');
        return res.data
    })

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
                                        
                                        className="btn btn-xs bg-orange-500 text-white px-3 hover:bg-orange-700 ">Approve</button>
                                        
                                        <button 
                                        
                                        className="btn btn-xs bg-orange-500 text-white px-3 hover:bg-orange-700 ">Deny</button>
                                        
                                        <button 
                                        
                                        className="btn btn-xs bg-orange-500 text-white px-3 hover:bg-orange-700 ">Feedback</button>
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