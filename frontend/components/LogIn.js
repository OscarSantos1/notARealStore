import { useState, useEffect } from 'react'
import axios from 'axios'
import { useShoppingCart } from '../context/ShoppingCartContext'

const LogIn = ({ register, setRegister, closeLogin, email, setEmail, pass, setPass, confirm, setConfirm, name, setName }) => {
  const APP_API_URL = 'http://localhost:5001'
  const { setToken, setUserName } = useShoppingCart()
  useEffect(() => {
    sessionStorage.removeItem('doMeToken')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let payload
    let response
    let msg
    if (email.length === 0) return alert('Must provide username')
    if (pass.length === 0) return alert('Must provide password')
    if (register && confirm.length === 0) return alert('Must confirm password')
    if (register && pass !== confirm) return alert('Password and confirmation must match')
    
    if (register) {
      payload = { 'name': name, 'email': email, 'password': pass }
      response = await axios.post(`${APP_API_URL}/users`, payload)
      if (response.data.msg === 'taken') msg = 'Username already taken'
      if (response.data.msg === 'success') msg = 'Success'
    } else {
      payload = { 'email': email, 'password': pass }
      response = await axios.post(`${APP_API_URL}/users/login`, payload)
      if (response.data.msg === 'invalid') msg = 'Invalid username and/or password'
      if (response.data.msg === 'Success!') msg = "You're in" 
    }
    console.log(response.data.token)
    setToken(response.data.token)
    setUserName(response.data.name)
    setName('')
    setEmail('')
    setPass('')
    setConfirm('')
    alert(msg)
    return
  }

  const handleRegister = () => {
    setRegister(!register)
  }

  return (
    <div className='relative flex flex-col justify-around items-center h-full'>
      <button onClick={closeLogin} className='absolute top-2 right-2 text-center p-2 bg-black pl-2 text-white jostfamily'>
        x
      </button>
      <div className='flex flex-col space-y-6 text-center w-60 font-light jostfamily ease-in duration-300'>
        <h2 className='text-3xl font-thin text-black'>{register ? 'REGISTER' : 'LOG IN'}</h2>
        <form className='flex flex-col space-y-5' onSubmit={handleSubmit} >
            <input className='border p-2 w-full bg-transparent' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='e-mail' id='email' name='email' />
            <input className={` ${register ? 'h-10' : 'hidden'} border p-2 w-full bg-transparent ease-in duration-500 overflow-hidden`} value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='name' id='name' name='name' />
            <input className='border p-2 w-full bg-transparent' value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='password' id='password' name='password' />
            <input className={` ${register ? 'h-10' : 'hidden'} border p-2 w-full bg-transparent ease-in duration-500 overflow-hidden`} value={confirm} onChange={(e) => setConfirm(e.target.value)} type='password' placeholder='confirm password' id='confirm' name='confirm' />
          <button className='border border-black' type='submit'>{register ? 'Create account' : 'Log In'}</button>
        </form>
        <footer className=''>
          <p>{register ? 'Already have an account?' : "Don't have an account yet?"}<span onClick={handleRegister} className='underline cursor-pointer'>{register ? 'Log in' : 'Register'}</span></p>
        </footer>
      </div>
    </div>
  )
}

export default LogIn