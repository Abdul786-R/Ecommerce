import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLaterBox from '../components/NewsLaterBox'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Umar Khadi Govandi Mumbai</p>
          <p className='text-gray-500'>Tel:(91)9653217981 <br />Email: admin@gmail.com</p>
          <Link to='/collection' className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Collections</Link>
        </div>
      </div>
      <NewsLaterBox />
    </div>
  )
}

export default Contact
