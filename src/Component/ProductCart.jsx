import React from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/Action/action";
const ProductCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto">
      <div className="w-80 bg-white border">
        <img
          src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
          style={{maxHeight: "100%", maxWidth: "100%"}}
          alt="product pic"
        />
        <div className="flex justify-around my-3 items-center">
          <h1 className="text-xl font-semibold">Rs 1000</h1>
          <div>
            <button
              onClick={() => dispatch(addToCart())}
              className="bg-red-500 rounded-2xl text-xl  text-white w-28"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
