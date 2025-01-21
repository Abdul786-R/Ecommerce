import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0,10));
    }, [products])

    
  return (
    <div className='my-10 '>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        "Discover the latest collections at [Customji], where style meets innovation. Our new arrivals bring fresh designs, vibrant colors, and trending essentials that reflect the season’s hottest styles . From fashion-forward apparel top-rated T-Shirts Jackets and trouser , each piece is crafted to enhance your everyday. Don’t miss out on these limited-edition.!
        </p>
      </div>
    {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProduct.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
