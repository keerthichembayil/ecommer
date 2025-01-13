import React from 'react'
import { useState,useEffect } from 'react'
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changequantity } from '../stores/Cartd';

const Cartitem = (props) => {
    const{productid,quantity}=props.data;
    
    const[detail,setDetail]=useState([]);
    const dispatch=useDispatch();
    useEffect(() => {
     const finddetail=products.filter(product=>product.id===productid)[0];

//      The filter() method returns an array of all elements in products that satisfy the condition product.id === productid.
// Even if only one element matches, filter() still returns an array with that single matching element.
     
     
     setDetail(finddetail);
    }, [productid])
    const handleplusQuantity=()=>{
        dispatch(changequantity({
            productid:productid,
            quantity:quantity+1
        })



        );

    }
    const handleminusQuantity=()=>{
        dispatch(changequantity({
            productid:productid,
            quantity:quantity-1
        })



        );
    }
    
  return (
    <div>
        <div className='flex justify-center gap-2 items-center'>
       
        <img src={detail.image} alt="" className='w-20 h-30'/>
        <h3>{detail.name}</h3>
        <p>${detail.price*quantity}</p>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'onClick={handleplusQuantity}>+</button>
            <p>{quantity}</p>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleminusQuantity}>-</button>

      </div>
    </div>
  )
}

export default Cartitem
