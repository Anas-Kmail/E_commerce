import React, { useContext } from 'react'
import usefetchData from '../../../customHooks/usefetchData'
import style from './Allproduct.module.css'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../../context/user.jsx'
import axios from 'axios'


export default function Allproduct() {
    const {data,loading,error}=usefetchData(`https://ecommerce-node4.onrender.com/products?page=1&limit=10`)
    if(error){
      return <h2 className='alert-danger'>{error}</h2>
         }
         const{isLogin,setLogin,UserData,setUserData}=useContext(UserContext);
      

  return (


<>

{isLogin?<>

<section className={`container ${style.mains} `}>
  {data?.products?.map(prod=>
    
<div className={`${style.card} `}>
  <div className={`${style.cardp}`}>
  <img className={`${style.card_image}`} src={prod.mainImage.secure_url} alt='Can,t found the image' />
  <h2 className={`${style.main}`}>Product Name</h2>
<h3 className={`${style.title}`}>{prod.name}</h3>
<span className={`${style.price}`}>Price</span>
<div className={`${style.price}`}>
<p>$</p><span className={`${style.speical}`}>{prod.price}</span>

</div>
<Link to={`/product/${prod._id}`} className={`${style.link}`} >More Deatils</Link>


</div>


</div>




)}


</section>




</>:<>
</>



}



</>

  )
}
