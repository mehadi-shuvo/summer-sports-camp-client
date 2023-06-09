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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../dashboard/Admin/ManageClasses/ManageClasses";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            //admin
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'manage-user',
                element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path:'manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },

            //instructor
            {
                path: 'instructorHome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'add-a-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'my-classes',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            }
        ]
    }
])

export default router