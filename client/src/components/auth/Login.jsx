import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin } from '../../redux/actions/authActions'
import toast from 'react-hot-toast'

const Login = ({closeModal, toggleLoginActive}) => {
    const dispatch = useDispatch()
    const error = useSelector((store) => store.auth.error)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {
        if(!email || !password){
            alert('fill all fields')
        } else {
            dispatch(UserLogin({email, password}))
            // closeModal()
            if(error){
                alert(error)
            }
        }
    }

  return (
    <div>
        <Dialog.Title
            as="h3"
            className="text-3xl mb-6 font-bold"
        >
            Log In
        </Dialog.Title>
        <div className="mt-2">
            <input onChange={(e) => setEmail(e.target.value)} className='bg-transparent border border-gray-700 rounded w-full px-4 py-2 mb-4' type="text" name="" id="" placeholder='Username' />
            <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent border border-gray-700 rounded w-full px-4 py-2' type="password" name="" id="" placeholder='Password' />
        </div>

        <div className="mt-4">
            <button
            type="button"
            className='mt-4 button w-full uppercase'
            onClick={loginHandler}
            >
            Log In
            </button>
            <p className='text-gray-500 mt-6 text-center'>Don't have an account?</p>
            <button
            type="button"
            className='w-full text-primary uppercase'
            onClick={toggleLoginActive}
            >
            Sign Up
            </button>
        </div>
    </div>
  )
}

export default Login