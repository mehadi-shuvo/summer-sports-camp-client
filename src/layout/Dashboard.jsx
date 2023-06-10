import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";


const Dashboard = () => {
  const [navItems, setNavItems] = useState();
  const [userRole] = useUserRole()

  useEffect(()=>{
        if(userRole === 'admin'){
            const items = <>
                <NavLink to='/dashboard/adminHome'>Admin Home</NavLink>
                <NavLink to='/dashboard/manage-user'>Manage Users</NavLink>
                <NavLink to='/dashboard/manage-classes'>Manage Classes</NavLink>
            </>
            setNavItems(items)
        }
        else if(userRole === 'instructor'){
            const items = <>
                <NavLink>Instructor Home</NavLink>
                <NavLink to='/dashboard/add-a-class'>Add Class</NavLink>
                <NavLink to='/dashboard/enrolled-classes'>My Enrolled Classes</NavLink>
            </>
            setNavItems(items)
        }
        else{
            const items = <>
                <NavLink>Student Home</NavLink>
                <NavLink to='/dashboard/selected-classes'>My Selected Classes</NavLink>
                <NavLink to='/dashboard/enrolled-classes'>My Enrolled Classes</NavLink>
                <NavLink to='/dashboard/my-payments'>My Payments</NavLink>
            </>
            setNavItems(items)
        }
    
},[userRole])


    return (
        <div className="flex">
            <div className="w-1/4 bg-orange-500 h-screen sticky top-0 left-0 mr-10">
                <div className="flex flex-col gap-3">
                    {
                        navItems
                    }
                </div>
            </div>
            <div className="w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;