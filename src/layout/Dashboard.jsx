import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  
    return (
        <div className="flex">
            <div className="w-1/4 bg-orange-500 h-screen sticky top-0 left-0 mr-10">
                <NavLink to='/dashboard/manage-user'>Manage User</NavLink>
            </div>
            <div className="w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;