import React from "react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div className="w-full py-10">
      <nav className="w-1/4 flex justify-around mx-auto gap-4">
        <Link
          to="/user/1"
          className="bg-gray-500 text-white rounded-xl w-1/3 cursor-pointer hover:opacity-80 py-1"
        >
          User 1
        </Link>
        <Link
          to="/user/2"
          className="bg-gray-500 text-white rounded-xl w-1/3 cursor-pointer hover:opacity-80 py-1"
        >
          User 2
        </Link>
        <Link
          to="/user/3"
          className="bg-gray-500 text-white rounded-xl w-1/3 cursor-pointer hover:opacity-80 py-1"
        >
          User 3
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
