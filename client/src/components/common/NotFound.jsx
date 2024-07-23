import React from "react";
import { useSelector } from "react-redux";

const NotFound = () => {
  const loading = useSelector((store) => store.auth.loading);
  return (
    <div className="min-h-[65vh] flex items-center justify-center">
      {loading ? "Loading..." : "Not Found"}
    </div>
  );
};

export default NotFound;
