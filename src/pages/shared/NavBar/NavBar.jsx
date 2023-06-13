
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useUserRole from "../../../hooks/useUserRole";

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
     let [dashboardLink, setDashboardLink] = useState('');
     const [userRole] = useUserRole()
    //console.log(user);
    const handleLogOut = () => {
        logOut().then(()=>{}).catch(error=>console.log(error))
    }

    useEffect(()=>{
        if(user){
            if(userRole === 'admin'){
                setDashboardLink('adminHome')
            }
            else if(userRole === 'instructor'){
                setDashboardLink('instructorHome');
            }
            else{
                setDashboardLink('studentHome')
            }
        
        }
    },[userRole, user])


    
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>instructors</Link></li>
        <li><Link to='/classes'>classes</Link></li>
        {
            user ? <>
                <li><Link to={`/dashboard/${dashboardLink}`}>Dashboard</Link></li>
            </> : ""
        }
    </>
    return (
        <div className="bg-orange-400">
            <div className="navbar w-4/5 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content z-40 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold text-xl">SS<span className="text-white">Camp</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase font-bold text-white">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <img className="h-12 w-12 rounded-full" title={name} src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="py-3 px-5 ml-2 rounded-lg text-white font-bold md:myBtn  bg-orange-500">Log Out</button>
                        </>
                            : <Link className="myBtn bg-orange-500" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;