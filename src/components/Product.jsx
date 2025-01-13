import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../stores/Cartd';

const Product = (props) => {
  const{id,name,price,image}=props.data;

 
  const dispatch=useDispatch();
  const handleaddtoCart=()=>{
    dispatch(addToCart({
      productid:id,
      quantity:1
    }))

  }

 
  
 
 

  return (
    <div className='bg-white p-5  rounded-xl shadow-sm drop-shadow-[0_80px_30px_#7a0a71]'>
      
        <img src={image} alt=''  className='w-full h-80 object-cover'/>
        
      <h3 className='text-2xl py-3 px-3 text-center font-medium text-black'>{name}</h3>
      <div className='flex justify-between'>
      <p>$<span className='text-2xl font-medium'>{price}</span></p>
      <button className='bg-gray-300 p-2 rounded-md hover:bg-gray-400 flex gap-2' onClick={handleaddtoCart}>
        <FaCartArrowDown/>Add To Cart
        </button>
    
      </div>
      
    </div>
  )
}

export default Product
