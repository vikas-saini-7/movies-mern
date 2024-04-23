import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="">
        <div onClick={openModal} className='cursor-pointer button'>
            Sign In
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="modal relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-dark p-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl mb-6 font-bold"
                  >
                    Log In
                  </Dialog.Title>
                  <div className="mt-2">
                    <input className='bg-transparent border border-gray-700 rounded w-full px-4 py-2 mb-4' type="text" name="" id="" placeholder='Username' />
                    <input className='bg-transparent border border-gray-700 rounded w-full px-4 py-2' type="password" name="" id="" placeholder='Username' />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className='mt-4 button w-full uppercase'
                      onClick={closeModal}
                    >
                      Log In
                    </button>
                    <button
                      type="button"
                      className='mt-4 py-2 w-full text-primary uppercase'
                    >
                      Sign Up
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
