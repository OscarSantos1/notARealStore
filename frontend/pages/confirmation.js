import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useShoppingCart } from '../context/ShoppingCartContext';

const confirmation = () => {
  const { userName } = useShoppingCart()
  return (
    <div className='flex-col w-screen h-screen pt-48 px-5 md:px-10 backdrop-blur-[13px] bg-white/90'>
      <div className='flex-col font-light space-y-6'>
        <div className='flex justify-start items-center gap-5 mb-10'>
          <IoIosCheckmarkCircle className='text-[70px] text-lime-500  -ml-2'/>
          <h1 className='font-bold'>ORDER COMPLETED</h1>
        </div>
        <h2>THANKS {userName.toUpperCase()}!</h2>
        <p className=''>We are preparing your order so you can get it as soon as possible. We'll let you know when it's on the way.</p>
        <button className='bg-black text-white pb-2 pt-3 px-6'>VIEW ORDER DETAILS</button>
      </div>
    </div>
  )
}

export default confirmation