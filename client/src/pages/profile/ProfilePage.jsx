import { IconUserCircle } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { name } = useSelector((state) => state.auth.user);
  return (
    <div className="min-h-[500px]">
      <div className="px-8 bg-gradient-to-r from-gray-500/10 to-gray-400/10">
        <div className="max-w-[900px] mx-auto pt-20 pb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <IconUserCircle size={32} />
            <h1 className="text-3xl">{name}</h1>
          </div>
          {/* <div>right</div> */}
        </div>
      </div>

      {/* form  */}
      {/* <div className="max-w-[900px] mx-auto px-8 py-8">
        <h1>Edit your Profile</h1>

        <div className="mt-4">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <div className="flex gap-2">
            <input
              id="username"
              type="text"
              className="h-10 w-1/2 bg-gray-500/10"
            />
            <button className="bg-gray-500/10 h-10 px-4">Edit</button>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <div className="flex gap-2">
            <input
              id="username"
              type="text"
              className="h-10 w-1/2 bg-gray-500/10"
            />
            <button className="bg-gray-500/10 h-10 px-4">Edit</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;
