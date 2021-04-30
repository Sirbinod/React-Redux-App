import React from "react";
import "../index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const {active, item, index, handleSelection} = props;
  const state = useSelector((state) => state.counter);
  return (
    <div className="h-20 bg-blue-600 items-center">
      <div className="container mx-auto ">
        <div className="flex py-5 item-center justify-between">
          <div className="text-xl text-white font-bold">LOGO</div>
          <div className="flex space-x-4 text-white">
            <div
              className={active ? "active" : ""}
              key={index}
              index={index}
              onClick={handleSelection}
            >
              {item.name} ({item.products.length})
            </div>
          </div>
          <div className="text-xl text-white font-bold">Cart {state}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
