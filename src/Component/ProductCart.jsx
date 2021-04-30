import React from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addProductToCart} from "../redux/Action/cart";

const ProductCart = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="w-60 bg-white border">
        <img
          src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
          style={{maxHeight: "100%", maxWidth: "100%"}}
          alt="product pic"
        />
        {state.name}
        <div className="flex justify-around my-3 items-center">
          <h1 className="text-xl font-semibold">{state.price}</h1>
          <div>
            <button
              onClick={() => dispatch(addProductToCart(product))}
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
