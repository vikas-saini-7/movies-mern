import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [loginActive, setLoginActive] = useState(true);

  function toggleLoginActive() {
    setLoginActive(!loginActive)
  }

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
                  {loginActive ?
                  <>
                    <Login
                      closeModal={closeModal}
                      toggleLoginActive={toggleLoginActive}
                    />
                  </>
                  :
                  <>
                    <SignUp
                      closeModal={closeModal}
                      toggleLoginActive={toggleLoginActive}
                    />
                  </>
                  }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
