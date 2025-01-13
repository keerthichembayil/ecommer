import React from 'react'
import { useState,useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = ({setSearchTerm}) => {
  const[totalQuantity,setTotalQuantity]=useState(0);
  
  const carts=useSelector(store=>store.cart.items);
  
  useEffect(() => {
    let total=0;
    carts.forEach((item)=>{
      total=total+item.quantity;
      setTotalQuantity(total);

    })
  
   
  }, [carts])
  
  return (
    <div>
<header className='flex justify-between items-center mb-5 bg-gray-500 mt-2 px-5 py-6'>
      <NavLink to="/" className='text-xl font-semibold'>HOME</NavLink>
      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
     <NavLink to="/cart"> <FaCartArrowDown style={{width:"50px",height:"50px"}}/></NavLink>
    
      <span className='absolute top-3/4 right-5/4 bg-red-500 text-white text-sm w-7 h-7 rounded-full flex
      justify-center items-center'>{totalQuantity}</span>
      </div>
      </header>
    </div>
    
  )
}

export default Header
