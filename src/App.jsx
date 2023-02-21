import { useState } from 'react'
import reactLogo from './assets/react.svg'
import img from './assets/img/basketball.png'
import logogoogle from './assets/img/google.png'
import logofacebook from './assets/img/facebook.png'
import { auth } from './config'
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Await, Navigate, useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'

function App() {
  const [count, setCount] = useState(0)
  const Navigate = useNavigate()
  const logingoogle = async () => {
    const data = await signInWithPopup(auth, new GoogleAuthProvider)
    console.log(data)
    Navigate(`/Home/`)
  }
  const loginfacebook = async () => {
    const data = await signInWithPopup(auth, new FacebookAuthProvider())
    console.log(data)
    Navigate(`/Home/`)
  }

  return (
    <div className="App">
      <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
          <div className='sm:w-1/2 px-16'>
            <h2 className='font-bold text-2xl text-[#002074]'>Login</h2>
            <p className='text-sm mt-4 text-[#002074]'>Silahkan Login</p>
            <form action="" className='flex flex-col gap-4'>
              <input className='p-2 mt-8 rounded-xl border' type="text" name='email' placeholder='Email' />
              <div className='relative'>
                <input className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password' />
              </div>
              <button className='bg-[#002074] rounded-xl text-white py-2 hover:scale-105 duration-300'>Login</button>
            </form>
            <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
              <hr className='border-gray-400' />
              <p className='text-center text-sm'>OR</p>
              <hr className='border-gray-400' />
            </div>
            <button onClick={logingoogle} className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'>
              <img className='mr-3' width="25px" src={logogoogle} alt="" /> Login With Google</button>
            <button onClick={loginfacebook} className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'>
              <img className='mr-3' width="25px" src={logofacebook} alt="" />Login With Facebook</button>
          </div>
          <div className='sm:block hidden w-1/2'>
            <img src={img} className='rounded-2xl' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
