import React from "react";
import "../index.css";
import {useSelector} from "react-redux";
const Navbar = () => {
  const state = useSelector((state) => state.counter);
  return (
    <div className="h-20 bg-blue-600 items-center">
      <div className="container mx-auto ">
        <div className="flex py-5 item-center justify-between">
          <div className="text-xl text-white font-bold">LOGO</div>
          <div className="text-xl text-white font-bold">Cart {state}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
