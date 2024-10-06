import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'


const LatestCollection = () => {
    const {products}=useContext(ShopContext)
    // console.log(products);
    const [latestProducts, setLatestProducts]=useState([]);
    console.log(latestProducts);
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])
    
  return (
    <div className='my-10'>
        <div className='text-center'>
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nam.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }

        </div>
    </div>
  )
}

export default LatestCollection