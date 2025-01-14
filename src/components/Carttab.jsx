import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux'
import { products } from '../products';
import Cartitem from './Cartitem';

const Carttab = () => {
  const carts=useSelector(store=>store.cart.items);
  
  const[totalprice,setTotalprice]=useState(0);
  useEffect(() => {
    const total=carts.reduce((sum,cartitem)=>{
      const product=products.find((p)=>p.id===cartitem.productid);
      console.log(product);
      return sum+(product?product.price*cartitem.quantity:0);
    },0);
    console.log(carts);
    setTotalprice(total);
   
  }, [carts])
  

  
  return (

    <div className='grid gap-5 bg-gradient-to-r from-purple-500 to-pink-500'>
      
    <div >
      {
        carts.map((item,key)=>
        <Cartitem key={key} data={item}/>
        )
      }

    
      
      
      
    </div>

    <div className='flex justify-center items-center bg-slate-400'>
      <p className='bg-blue-400 text-white font-bold'>Totalprice:${totalprice}</p>
    <button className='bg-blue-700 p-4 rounded-md text-white font-extrabold'>Buy Now</button>
    </div>
    
    </div>  
    
  )
}

export default Carttab
