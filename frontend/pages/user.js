import { useState, useEffect } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from 'next/link'

const user = () => {
  const [section, setSection] = useState('purchases')
  const { userName, setUserName, token, setToken } = useShoppingCart()
  useEffect(() => {
    const fetchUser = async () => {
      const header = 'Bearer ' + localStorage.getItem('jwt-token').replace(/"|'/g, '')
      const head = { headers: {'Authorization': header }}
      const response = await fetch('http://localhost:5001/users/me', head )
      const userData = await response.json()
      console.log(userData)
    }
    fetchUser()
  })

  const logout = () => {
    setToken('')
    setUserName('')
  }

  return (
    <div className='relative flex-col justify-end h-screen w-screen pt-32 backdrop-blur-[13px] bg-slate-200/80'>
      {token ? <div className='flex justify-center text-sm font-light mb-3'>
        <button onClick={() => setSection('purchases')} className={`${section === 'purchases' && 'bg-black text-white'} pb-1 pt-2 px-4 rounded-lg`}>PURCHASES</button>
        <button onClick={() => setSection('account')} className={`${section === 'account' && 'bg-black text-white'} pb-1 pt-2 px-4 rounded-lg`}>ACCOUNT</button>
      </div> : <div className='flex justify-center font-light mt-36'><div className='bg-black text-white py-2 pt-3 p-4'>LOG IN TO YOUR ACCOUNT</div></div>}
      {section === 'purchases' && token ? <div className='absolute bottom-0 top-[172px] flex-col px-6 md:px-28 pt-4 pb-4 space-y-5 w-full overflow-auto'>
        <div className='flex justify-center items-center h-96 bg-white rounded-3xl'>
          <div className='text-sm font-light'>YOU HAVE NO PURCHASES YET</div>
        </div>
        <div className='flex justify-center items-center h-96 bg-white rounded-3xl'>
          <div className='text-sm font-light'>YOU HAVE NO PURCHASES YET</div>
        </div>
        <div className='flex justify-center items-center h-96 bg-white rounded-3xl'>
          <div className='text-sm font-light'>YOU HAVE NO PURCHASES YET</div>
        </div>
        <div className='flex justify-center items-center h-96 bg-white rounded-3xl'>
          <div className='text-sm font-light'>YOU HAVE NO PURCHASES YET</div>
        </div>
      </div> : ''}
      {section === 'account' && token ? <div className='flex-col gap-3 px-6 md:px-28 pt-4'>
        <div className='flex-col justify-start items-center bg-white rounded-3xl overflow-auto hide-scroll overscroll-contain'>
          <h2 className='pl-9 py-4'>{userName.toUpperCase()}</h2>
          <div className='flex justify-between items-center px-9 py-4 text-sm font-light cursor-pointer w-full md:w-1/2'>
            <div>ADDRESSES</div>
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </div>
          <div className='flex justify-between items-center px-9 py-4 text-sm font-light cursor-pointer w-full md:w-1/2'>
            <div>PAYMENT METHODS</div>
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </div>
          <div className='flex justify-between items-center px-9 py-4 text-sm font-light cursor-pointer w-full md:w-1/2'>
            <div>CHANGE EMAIL</div>
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </div>
          <div className='flex justify-between items-center px-9 py-4 pb-9 text-sm font-light cursor-pointer w-full md:w-1/2'>
            <div>CHANGE PASSWORD</div>
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </div>
        </div>
        <div className='inline-block ml-9 mt-3 font-light underline text-slate-500'><Link onClick={logout} href='/' >Log out</Link></div>
      </div> : ''}
    </div>
  )
}

export default user
