import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/');
        return res.data;
    })


    const handleCreateAdmin = user => {
        fetch(`https://sports-summer-camp-server.vercel.app/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Congratulations!! Now, ${user.name} is an admin.`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleCreateInstructor = user => {
        fetch(`https://sports-summer-camp-server.vercel.app/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Congratulations!! Now, ${user.name} is an instructor.`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="my-20">
            <Helmet>
                <title>Dashboard | Users</title>
            </Helmet>
            <h4 className="text-4xl text-center font-bold text-orange-500">Manage User</h4>
            <h3>total {users.length}</h3>

            <div>
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr className=" uppercase ">
                            <th>#</th>
                            <th>user name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>instructor</th>
                            <th>admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td className="">{user.email}</td>
                                <td className="capitalize">{user?.role ? user?.role : 'Student'}</td>
                                <td >
                                    <button 
                                    disabled={user?.role === 'instructor'}
                                    onClick={()=>handleCreateInstructor(user)}
                                    className="btn  myBtn bg-orange-500 hover:text-orange-500 disabled:border-none">Instructor</button>
                                </td>
                                <th>
                                    <button 
                                    disabled={user?.role === 'admin'}
                                    onClick={()=>handleCreateAdmin(user)}
                                    className="btn  myBtn bg-orange-500 hover:text-orange-500 disabled:border-none">Admin</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;