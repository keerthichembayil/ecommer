import React from 'react'
import { useState } from 'react'
import {products} from '../products'
import Product from './Product'
import myimage from '../assets/images/landingpage.avif'
const Home = ({searchterm}) => {
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchterm.toLowerCase())
  );
  const displayedproducts=filteredProducts.length>0?filteredProducts:products;
  return (
    <>
    <div>
      <div className='grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-5 py-10'>
        <img src={myimage} className='lg:col-span-3 md:col-span-3 sm:col-span-2 rounded-lg shadow-md'/>
        <div className="lg:col-span-3 md:col-span-3 sm:col-span-2 flex flex-col justify-center text-center lg:text-left space-y-4">
    <p className="text-sm font-medium text-blue-700 uppercase tracking-wider">
      Trending Products
    </p>
    <h1 className="text-3xl lg:text-5xl font-bold text-red-600">
      New Arrival From Collections
    </h1>
    <p className="text-gray-600 text-base leading-relaxed">
      Explore the latest trends in fashion and find your perfect style today...............
    </p>
    <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition-all">
      Shop Now
    </button>
  </div>
      </div>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    </div>
   
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
    {
      displayedproducts.map((product,key)=>
      {
        return ( <Product
          key={key}
          data={product}

        />)

      })
    }
    </div>

 
    </>
  )
}

export default Home
