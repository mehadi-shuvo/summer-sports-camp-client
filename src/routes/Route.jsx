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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <AdminRoute><FeedbackPage></FeedbackPage></AdminRoute>,
                loader: ({params}) => fetch(`https://sports-summer-camp-server.vercel.app/class/feedback/${params.id}`)
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
                element:<StudentRoute><StudentHome></StudentHome></StudentRoute>
            },
            {
                path: 'selected-classes',
                element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
            },
            {
                path:'payment/:id',
                element:<StudentRoute><Payment></Payment></StudentRoute>,
                loader: ({params}) => fetch(`https://sports-summer-camp-server.vercel.app/myClasses/one/${params.id}`)
            },
            {
                path: 'enrolled-classes',
                element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
            },
            {
                path: 'my-payments',
                element: <StudentRoute><MyPayments></MyPayments></StudentRoute>
            }
        ]
    }
])

export default router