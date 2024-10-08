import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconChevronDown,
  IconEdit,
  IconEditCircle,
  IconLogout,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { logOutUser } from "../../redux/reducres/authReducer";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutHandler() {
    dispatch(logOutUser());
    toast.success("Logged Out Successfully");
    navigate("/");
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center w-full justify-center rounded-md bg-black/20 px-4 py-2 font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <IconUserCircle className="mr-2" />
          <p>{user?.name}</p>
          <IconChevronDown
            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Link to="/profile">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    <IconEdit className="mr-2" size={18} />
                    My Profile
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className="px-1 py-1">
            <Link to="/reviews">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    <IconEditCircle className="mr-2" size={18} />
                    My Comments
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className="px-1 py-1">
            <Link to="/settings">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    <IconSettings className="mr-2" size={18} />
                    Settings
                  </button>
                )}
              </Menu.Item>
            </Link>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logOutHandler}
                  className={`${
                    active ? "bg-primary text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2`}
                >
                  <IconLogout className="mr-2" size={18} />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserDropdown;
