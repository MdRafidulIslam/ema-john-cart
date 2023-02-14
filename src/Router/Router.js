import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import Shipping from "../components/Shipping/Shipping";
import Shop from "../components/Shop/Shop";
import SignUp from "../components/SignUp/SignUp";
import Main from './../layout/Main';
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path: '/inventory',
                element: <PrivateRoute> <Inventory></Inventory></PrivateRoute>
            },
            {
                path: '/shipping',
                element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])