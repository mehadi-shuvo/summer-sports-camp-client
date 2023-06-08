import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <div className="bg-orange-100 w-2/3 mx-auto my-10 p-20 rounded-xl flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center">
                <h4 className="text-4xl text-orange-500 text-center font-bold mb-4">Create Account</h4>
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Name</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" placeholder="Full Name" {...register("name", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Photo</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="text" placeholder="Photo URL" {...register("photo", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">E-mail</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="email" placeholder="Your e-mail" {...register("email", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="number" placeholder="Phone number" {...register("phone", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="password" placeholder="Password" {...register("password", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Confirm Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true, maxLength: 80 })} />
                        </div>
                    </div>

                    <input className="w-3/4 myBtn bg-orange-500 hover:text-orange-500 cursor-pointer my-4" type="submit" value='Sing Up' />
                </form>
                <p className="text-base text-slate-800">Already have any account? <Link className="text-orange-500 underline" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;