import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux'
import { products } from '../products';
import Cartitem from './Cartitem';

const Carttab = () => {
  const carts=useSelector(store=>store.cart.items);
  console.log(carts);
  // const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   const total = carts.reduce((sum, cartitem) => {
  //     const priceItem = products.find((price) => price.productid === cartitem.productid);
  //     return sum + (priceItem ? priceItem.price * cartitem.quantity : 0);
  //   }, 0);

  //   setTotalPrice(total);
  // }, [carts])
  
  return (

    <div>
      
    <div className='grid gap-5 bg-gradient-to-r from-purple-500 to-pink-500'>
      {
        carts.map((item,key)=>
        <Cartitem key={key} data={item}/>
        )
      }

    
      
      <button className='bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-150 ease-in-out'>checkout</button>
      
      
    </div>
    </div>  
    
  )
}

export default Carttab
