import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Dialog } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { UserSignup } from '../../redux/actions/authActions';

const SignUp = ({closeModal, toggleLoginActive}) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signupHandler() {
        if(!name || !email || !password){
            alert('fill all fields')
        } else {
            dispatch(UserSignup({name, email, password}))
            closeModal()
        }
    }
    
  return (
    <div>
        <Dialog.Title
            as="h3"
            className="text-3xl mb-6 font-bold"
        >
            Sign Up
        </Dialog.Title>
        <div className="mt-2">
            <input onChange={(e) => setName(e.target.value)} className='bg-transparent border border-gray-700 rounded w-full px-4 py-2 mb-4' type="text" name="" id="" placeholder='Your Name' />
            <input onChange={(e) => setEmail(e.target.value)} className='bg-transparent border border-gray-700 rounded w-full px-4 py-2 mb-4' type="text" name="" id="" placeholder='Username' />
            <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent border border-gray-700 rounded w-full px-4 py-2' type="password" name="" id="" placeholder='Password' />
        </div>

        <div className="mt-4">
            <button
            type="button"
            className='mt-4 button w-full uppercase'
            onClick={signupHandler}
            >
            Sign Up
            </button>
            <p className='text-gray-500 mt-6 text-center'>Already have an account?</p>
            <button
            type="button"
            className='w-full text-primary uppercase'
            onClick={toggleLoginActive}
            >
            Log In
            </button>
        </div>
    </div>
  )
}

export default SignUp