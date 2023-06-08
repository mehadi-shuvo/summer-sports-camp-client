import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <div className="bg-orange-100 w-2/3 mx-auto my-10 p-20 rounded-xl flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-4xl text-orange-500 text-center font-bold mb-4">Please Login</h4>
                    <div>
                        <div className="w-[380px] space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">E-mail</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="email" placeholder="Your e-mail" {...register("email", { required: true, maxLength: 80 })} />
                        </div>
                        <div className="w-[380px] space-y-4 mb-3">
                            <label className="font-bold text-slate-700 text-xl">Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type="password" placeholder="Your password" {...register("email", { required: true, maxLength: 80 })} />
                        </div>
                    </div>

                    <input className="w-full myBtn bg-orange-500 hover:text-orange-500 cursor-pointer my-4" type="submit" value='Login' />
                </form>
                <p className="text-base text-slate-800">Don't have any account? <Link className="text-orange-500 underline" to='/register'>Create One</Link></p>
            </div>
        </div>
    );
};

export default Login;