import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    //hooks
    const { createUser, addNameAndPhoto } = useContext(AuthContext)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    //form submit handle
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert('password not matched');
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
              //  console.log(user);
                addNameAndPhoto(data.name, data.photo)
                    .then((result) => {

                        const user = { email: data.email, name: data.name, photo: data.photo }
                        console.log(result?.user);
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }

                            })

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    };
    // console.log(errors);
    return (
        <div>
            <div className="bg-orange-100 w-2/3 mx-auto my-10 p-20 rounded-xl flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center">
                    <h4 className="text-4xl text-orange-500 text-center font-bold mb-4">Create Account</h4>
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Name</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" placeholder="Full Name" {...register("name", {
                                required: true
                            })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Name is required</span>}
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Photo</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" placeholder="Photo URL" {...register("photo", {
                                required: true
                            })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>PhotoURL is required</span>}
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">E-mail</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="email" placeholder="Your e-mail"
                                {...register("email", {
                                    required: true
                                })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Email is required</span>}
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Phone</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="number" placeholder="Phone number" {...register("phone", {})} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="password" placeholder="Password"
                                {...register("password", {
                                    required: true,
                                    maxLength: 80,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                                })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Password is required</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 block'>Password must have one capital and small letter and  one digit and at least one special character and length should 6 character</span>}
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Confirm Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="password" placeholder="Confirm password" {...register("confirmPassword", {
                                required: true
                            })} />
                            {errors.password?.type === 'required' && <span className='text-red-500 block'>Please confirm your password</span>}
                        </div>
                    </div>

                    <input className={`w-3/4 myBtn bg-orange-500 hover:text-orange-500 cursor-pointer my-4 `} type="submit" value='Sing Up' />
                </form>
                <p className="text-base text-slate-800">Already have any account? <Link className="text-orange-500 underline" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;