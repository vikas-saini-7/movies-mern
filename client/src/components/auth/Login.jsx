import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { UserLogin } from '../../redux/actions/authActions'
import toast from 'react-hot-toast'

const Login = ({closeModal, toggleLoginActive}) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {
        if(!email || !password){
            alert('fill all fields')
        } else {
            dispatch(UserLogin({email, password}))
            .then(() => {
              // Show success toast
              toast.success('Login successful!');
            })
            .catch((error) => {
              // Show error toast
              toast.error(`Error: ${error.message}`);
            });
            closeModal()
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
            <button
            type="button"
            className='mt-4 py-2 w-full text-primary uppercase'
            onClick={toggleLoginActive}
            >
            Sign Up
            </button>
        </div>
    </div>
  )
}

export default Login