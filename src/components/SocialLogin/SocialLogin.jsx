import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const SocialLogin = () => {
    const { LoginGoogle } = useContext(AuthContext)
    let location = useLocation();
    let navigate = useNavigate();

    // console.log(location);
    let from = location.state?.from?.pathname || "/";


    const handleGoogleLogin = () => {
        LoginGoogle()
            .then(result => {
                const data = result.user;
                console.log(data);
                const user = { email: data.email, name: data.displayName, photo: data.photoURL }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });

                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="text-center my-5">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-none">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;