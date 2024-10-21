import React from 'react'
import Categories from '../Categories/Categories.jsx'
import Allproduct from '../Allproduct/Allproduct.jsx'
import style from './Home.module.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';


export default function Home() {



  return (
    
    <main className='home'>
<Categories/>
<div className={`${style.middle}`}>
  <h1>
    All Products

  </h1>
  
</div>
<Allproduct/>

    </main>
    
  )
}
