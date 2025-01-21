import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
            <Link to='/' className='text-[30px] text-gray-700'>MYRA</Link>

                <p className='w-full md:w-2/3 text-gray-600'>
                "Welcome to [Customji], where shopping meets convenience and quality. We pride ourselves on offering a diverse selection of products at unbeatable prices, from top brands to unique finds. Our commitment is to provide a seamless shopping experience, secure payment options, and reliable customer service, making it easy for you to shop with confidence. Whether you're looking for the latest fashion like, T-shirts, Trousers, Jackets with customizables designs, for man and womens and children,  we’re here to help. Join us in discovering what makes shopping with us a unique experience!"
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT US</Link>
                    <Link to='/contact'>Contact US</Link>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9653217981</li>
                    <li>customjii1678@gmail.com</li>
                </ul>
            </div>
      </div>

      <div className=''>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 customji.in - All Right reserved</p>
      </div>
    </div>
  )
}

export default Footer
