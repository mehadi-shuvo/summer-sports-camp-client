import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../dashboard/Admin/Home/AdminHome";
import ManageUser from "../dashboard/Admin/ManageUser/ManageUser";
import InstructorHome from "../dashboard/Instructor/InstructorHome/InstructorHome";
import AddClass from "../dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../dashboard/Instructor/MyClasses/MyClasses";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'adminHome',
                element:<AdminHome></AdminHome>
            },
            {
                path:'manage-user',
                element:<ManageUser></ManageUser>
            },

            //instructor
            {
                path: 'instructorHome',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'add-a-class',
                element: <AddClass></AddClass>
            },
            {
                path: 'my-classes',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            }
        ]
    }
])

export default router