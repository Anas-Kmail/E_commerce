import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import UserContextProvider from './components/context/user.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContextProvider from './components/context/CartContext.jsx';





export default function App() {

  return (
    <CartContextProvider>

 <UserContextProvider>
      <RouterProvider router={router}  />
  <ToastContainer/>
 </UserContextProvider>

    </CartContextProvider>
  
  )
}
