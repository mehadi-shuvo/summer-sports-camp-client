import {useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MySelectedClasses = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/myClasses/${user.email}`)
            return res.data
        }
    })

    const DeleteHandler = id =>{
        axiosSecure.delete(`/myClasses/${id}`)
        .then(res=> {
            if(res.data.deletedCountId > 0 ){
                refetch();
            }
        })
        .catch(error=>console.log(error))
    }

    return (
        <div>
            my selected classes


            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-orange-500 uppercase text-lg">
                                <th>
                                    #
                                </th>
                                <th>Class Info</th>
                                <th>Instructor</th>
                                <th>Delete</th>
                                <th className="text-center">Payment</th>
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
                                        <p className="text-base text-slate-700 font-bold capitalize">{row.instructorName}</p>
                                        <p className="text-base text-slate-700 font-light">{row.instructorEmail}</p>
                                    </td>
                                    <td className="uppercase text-slate-700">
                                    <button
                                            
                                            onClick={() => DeleteHandler(row._id)}
                                            className="btn  bg-orange-500 text-white px-3 hover:bg-orange-700 ">Delete</button>
                                    </td>
                                    <th className="flex justify-around items-center">
                                        <Link
                                            to={`/dashboard/payment/${row.classId}`}
                                            className="btn  bg-orange-500 text-white px-10 hover:bg-orange-700">Pay</Link>
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

export default MySelectedClasses;