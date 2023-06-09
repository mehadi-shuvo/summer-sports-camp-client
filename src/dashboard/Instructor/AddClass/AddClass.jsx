import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const imgKey = import.meta.env.VITE_IMG_KEY

const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgKey}`

    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image', data.image[0]);
        console.log(data);



        fetch(imgHostingURL, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    console.log(imgURL);
                    const { email, name, className, seats, price } = data
                    const newItem = { name, email, image: imgURL, className, seats: parseInt(seats), price: parseFloat(price), enrolled: 0, status: 'pending' };
                    axiosSecure.post('/class', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                // reset();
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: 'Item added successfully!!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    return (
        <div className="my-20"> 

            <div className="bg-orange-100 w-4/5 mx-auto my-10 p-20 rounded-xl flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center">
                    <h4 className="text-4xl text-orange-500 text-center font-bold mb-4">Add a new Class</h4>
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Instructor Email</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" value={user.email} readOnly 
                            {...register("email", {
                                required: true
                            })} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Instructor Name</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" value={user.displayName} readOnly {...register("name", {
                                required: true
                            })} />
                        </div>

                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Class Name</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" placeholder="Enter your new class name"
                                {...register("className", {
                                    required: true
                                })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Class name is required</span>}
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Seats Number</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="number" placeholder="Enter your seat number" 
                            {...register("seats", {required: true})} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Seat number is required</span>}
                        </div>

                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Price</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="number" placeholder="$ price"
                                {...register("price", {
                                    required: true,
                                    maxLength: 80,
                                })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>price is required</span>}
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Class Image</label><br />
                            <input className="py-2 px-2 rounded-lg w-full d" type="file" {...register("image", {
                                required: false
                            })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Please Add your class photo</span>}
                        </div>
                    </div>

                    <input className={`w-3/4 myBtn bg-orange-500 hover:text-orange-500 cursor-pointer my-4 `} type="submit" value='Add Class' />
                </form>
                
            </div>
        </div>
    );
};

export default AddClass;