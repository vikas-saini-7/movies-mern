import { IconUserCircle } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { name, email } = useSelector((state) => state.auth.user);
  return (
    <div className="min-h-[500px]">
      <div className="px-8 bg-gradient-to-r from-gray-500/10 to-gray-400/10">
        <div className="max-w-[900px] mx-auto pt-20 pb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mt-8">
            <IconUserCircle size={32} />
            <h1 className="text-3xl">{name}</h1>
          </div>
        </div>
        {/* <div>{email}</div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
