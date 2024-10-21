import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
   

  const [isLogin, setLogin] = useState(localStorage.getItem("userToken") ? true : false);
  const [UserData, setUserData] = useState({});







  useEffect(() => {


    const token = localStorage.getItem("userToken");
    if (token) {
      setLogin(true);
      const decoded = jwtDecode(token);
      setUserData(decoded);
  

    }


  }, []);


  
const [user,setuser]=useState({});

const getuser=async ()=>{
  
    const token=localStorage.getItem('userToken');
const {data}=await axios.get(`https://ecommerce-node4.onrender.com/user/profile`,{
    headers:{

        Authorization:`Tariq__${token}`
    }


});
console.log(data);
setuser(data.user);



}

useEffect(()=>{

  getuser();

},[user]);


  return <UserContext.Provider value={{ isLogin, setLogin, UserData, setUserData,user }}>{children} </UserContext.Provider>;
}

export default UserContextProvider;