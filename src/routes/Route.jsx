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
import Instructors from "../pages/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import FeedbackPage from "../dashboard/Admin/ManageClasses/FeedbackPage";
import StudentHome from "../dashboard/Student/StudentHome/StudentHome";
import MySelectedClasses from "../dashboard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../dashboard/Student/Payment/Payment";
import EnrolledClasses from "../dashboard/Student/EnrolledClasses/EnrolledClasses";
import MyPayments from "../dashboard/Student/MyPayments/MyPayments";

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
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <ClassesPage></ClassesPage>
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
            {
                path: 'feedback/:id',
                element: <FeedbackPage></FeedbackPage>
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
            },
            //student 
            {
                path: 'studentHome',
                element:<StudentHome></StudentHome>
            },
            {
                path: 'selected-classes',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path:'payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/myClasses/one/${params.id}`)
            },
            {
                path: 'enrolled-classes',
                element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
            },
            {
                path: 'my-payments',
                element: <PrivateRoute><MyPayments></MyPayments></PrivateRoute>
            }
        ]
    }
])

export default router