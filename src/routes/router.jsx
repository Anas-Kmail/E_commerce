import {createBrowserRouter} from "react-router-dom"

//import { Children } from "react"
import Home from "../components/user/Home/Home.jsx"
import Register from "../pages/user/Register/Register.jsx";
import Login from "../pages/user/Login/Login.jsx";
import Root from "../assets/Root.jsx";
import CategoryDetails from "../pages/user/CategoryDetails/CategoryDetails.jsx";
import Product from "../pages/user/Product/Product.jsx";
import Cart from "../pages/user/Cart/Cart.jsx";
import Profile from "../pages/user/Profile/Profile.jsx";
import ForgetPassword from "../pages/user/Forgetpassword/ForgetPassword.jsx";
import SendCode from './../pages/user/SendCode/SendCode';






const router=createBrowserRouter([
{
path:'/',
element:<Root />,
children:[{
path:'/',
element:<Home/>
 
},{
path:'/register',
element:<Register/>



},{
path:'/login',
element:<Login  />


},{
path:'/CategoryDetails/:Category_id',
element:<CategoryDetails/>


},{
path:'/product/:productId',
element:<Product/>


},{
    path:'/cart',
    element:
    <Cart/>


},{
path:'/profile',
element:<Profile/>



},{
path:'/forgetpassword',
element:<ForgetPassword/>


},{
path:'/sendcode',
element:<SendCode/>


}
]
}

]);
export default router; 