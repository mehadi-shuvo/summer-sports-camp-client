import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";
import { FaHouseUser, FaBookReader, FaUserTie, FaHome, FaList, FaGripVertical, FaHandHoldingUsd, FaClipboard, FaCalendarCheck, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";


const Dashboard = () => {
    const [navItems, setNavItems] = useState();
    const [userRole] = useUserRole()

    useEffect(() => {
        if (userRole === 'admin') {
            const items = <>
                <NavLink
                    className="text-slate-300 font-bold text-lg flex items-center gap-2"
                    to='/dashboard/adminHome'><FaHouseUser /> Admin Home</NavLink>
                <NavLink
                    className="text-slate-300 font-bold text-lg flex items-center gap-2"
                    to='/dashboard/manage-user'><FaUsers /> Manage Users</NavLink>
                <NavLink
                    className="text-slate-300 font-bold text-lg flex items-center gap-2"
                    to='/dashboard/manage-classes'><FaCalendarAlt /> Manage Classes</NavLink>
            </>
            setNavItems(items)
        }
        else if (userRole === 'instructor') {
            const items = <>
                <NavLink
                    className="text-slate-300 font-bold text-lg flex items-center gap-2"
                    to='/dashboard/instructorHome'><FaHouseUser /> Instructor Home</NavLink>
                <NavLink
                    className="text-slate-300 font-bold text-lg flex items-center gap-2"
                    to='/dashboard/add-a-class'><FaClipboard /> Add Class</NavLink>
                <NavLink
                    className="text-slate-300 font-bold text-lg flex items-center gap-2"
                    to='/dashboard/my-classes'><FaCalendarCheck /> My Classes</NavLink>
            </>
            setNavItems(items)
        }
        else {
            const items = <>
                <NavLink

                    className="text-slate-300 font-bold text-lg flex items-center gap-2" to='/dashboard/studentHome'
                ><FaHouseUser /> Student Home</NavLink>
                <NavLink

                    className="text-slate-300 font-bold text-lg flex items-center gap-2" to='/dashboard/selected-classes'
                ><FaList /> My Selected Classes</NavLink>
                <NavLink

                    className="text-slate-300 font-bold text-lg flex items-center gap-2" to='/dashboard/enrolled-classes'
                ><FaGripVertical /> My Enrolled Classes</NavLink>
                <NavLink

                    className="text-slate-300 font-bold text-lg flex items-center gap-2" to='/dashboard/my-payments'
                ><FaHandHoldingUsd /> My Payments</NavLink>
            </>
            setNavItems(items)
        }

    }, [userRole])


    return (
        <div className="flex">
            <div className="w-1/4 bg-orange-500 h-screen sticky top-0 left-0 mr-10 px-10 pb-20">
                <h2 className="text-2xl font-bold text-white my-10">Summer Spots Camp</h2>
                <div className="flex flex-col gap-3">
                    <Slide>
                        {
                            navItems
                        }
                    </Slide>
                </div>
                <div className="divider"></div>
                <Slide>
                    <div className="space-y-3">
                        <Link className="text-white font-bold text-lg flex items-center gap-2" to='/'><FaHome></FaHome> Home</Link>
                        <Link className="text-white font-bold text-base flex items-center gap-2" to='/classes'> <FaBookReader /> Classes</Link>
                        <Link className="text-white font-bold text-base flex items-center gap-2" to='/instructors'><FaUserTie /> Instructors</Link>
                    </div>
                </Slide>
            </div>
            <div className="w-3/4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;