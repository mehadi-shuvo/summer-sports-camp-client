import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {login} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    let location = useLocation();
    let navigate = useNavigate();


    let from = location.state?.from?.pathname || "/";
    const showPasswordHandler = ()=>{
        setShowPassword(!showPassword);
    }

    const onSubmit = data => {
        login(data.email, data.password)
            .then(result=>{
                //console.log(result);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Login successfully!!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, { replace: true });
            })
            .catch(error=>{
                console.log(error);
            })
    
    };
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
                        <div className="w-[380px] space-y-4 mb-3 relative">
                            <label className="font-bold text-slate-700 text-xl">Password</label><br />
                            <input className="py-2 px-2 rounded-lg w-full" type={showPassword ? 'text' : 'password'}
                            placeholder="Your password" 
                            {...register("password", 
                            { required: true, maxLength: 80 })
                            } />
                            <span className="absolute right-5 top-[52px] text-lg">{showPassword? <FaEyeSlash onClick={showPasswordHandler}></FaEyeSlash> : <FaEye onClick={showPasswordHandler}></FaEye>}</span>
                        </div>
                    </div>

                    <input className="w-full myBtn bg-orange-500 hover:text-orange-500 cursor-pointer my-4" type="submit" value='Login' />
                </form>
                <p className="text-base text-slate-800">Don't have any account? <Link className="text-orange-500 underline" to='/register'>Create One</Link></p>
                <div className="divider"></div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;