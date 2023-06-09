
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    //console.log(user);
    const handleLogOut = () => {
        logOut().then(()=>{}).catch(error=>console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>instructors</Link></li>
        <li><Link to='/all-toys'>class</Link></li>
        {
            user ? <>
                <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
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
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="font-bold text-xl">Toy<span className="text-red-500">Cars</span></a>
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
                            <button onClick={handleLogOut} className="myBtn bg-orange-500">Log Out</button>
                        </>
                            : <Link className="myBtn bg-orange-500" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;