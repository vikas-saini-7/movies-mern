import React from 'react'
import { Dialog } from '@headlessui/react'

const SignUp = ({closeModal, toggleLoginActive}) => {
  return (
    <div>
        <Dialog.Title
            as="h3"
            className="text-3xl mb-6 font-bold"
        >
            Sign Up
        </Dialog.Title>
        <div className="mt-2">
            <input className='bg-transparent border border-gray-700 rounded w-full px-4 py-2 mb-4' type="text" name="" id="" placeholder='Your Name' />
            <input className='bg-transparent border border-gray-700 rounded w-full px-4 py-2 mb-4' type="text" name="" id="" placeholder='Username' />
            <input className='bg-transparent border border-gray-700 rounded w-full px-4 py-2' type="password" name="" id="" placeholder='Password' />
        </div>

        <div className="mt-4">
            <button
            type="button"
            className='mt-4 button w-full uppercase'
            onClick={closeModal}
            >
            Sign Up
            </button>
            <button
            type="button"
            className='mt-4 py-2 w-full text-primary uppercase'
            onClick={toggleLoginActive}
            >
            Log In
            </button>
        </div>
    </div>
  )
}

export default SignUp