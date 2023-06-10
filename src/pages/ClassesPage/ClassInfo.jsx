
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ClassInfo = ({ item }) => {
    const {user} = useAuth();
    const {seats} = item;
    const [userRole] = useUserRole();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure()


    const selectClassHandler =(item)=>{
        console.log(item);
        if(user === null){

            Swal.fire({
                title: 'Sorry, You have not logged',
                text: "Without login you can not select it.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Right decision!',
                    'Login fast and enjoy',
                    'success'
                  )
                  navigate('/login')
                }
              })
   
        }
        const {_id, name, email, image, className, seats, price} = item
        axiosSecure.post('/myClasses',{
          classId: _id, instructorName: name, instructorEmail: email, image, className, seats, price, email: user.email
        })
        .then(res =>{
            if(res.data.acknowledged){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Successfully added your class',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
    return (
        <div className={`card card-compact bg-orange-200 shadow-xl ${seats === 0 && 'bg-red-500 text-white'}`}>
            <figure><img className="" src={item.image} alt="Shoes" /></figure>
            <div className="py-4 px-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl text-orange-500 font-bold">{item.className}</h2>
                    <p className="bg-orange-500 text-white text-base font-bold capitalize py-2 px-4 rounded-lg">price $ {item.price}</p>
                </div>
                <h4>Available Seats: {item.seats}</h4>
                <div className="divider before:bg-orange-500 after:bg-orange-500"></div>
                <p className="text-lg text-orange-500 tracking-wider underline">Instructor</p>
                <p className="text-xl text-slate-700 font-bold capitalize tracking-wider">{item.name}</p>
                <p className="text-base text-slate-700">{item.email}</p>
                <div className="card-actions justify-center">
                    <button 
                    onClick={()=>selectClassHandler(item)}
                    disabled={seats === 0|| userRole ==='admin' || userRole === 'instructor'}  
                    className="btn myBtn bg-orange-500 hover:text-orange-500 disabled:border-none"
                    >Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassInfo;