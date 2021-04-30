import React from "react";
import {removeProductFromCart} from "../redux/Action/cart";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Card = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const calculateTotal = (total, currentItem) =>
    parseFloat(total + currentItem.price * (currentItem.quantity || 1));

  const renderProduct = (product, index) => (
    <div key={index}>
      <span>{product.name} </span>
      <span> ${product.price} </span>
      <span>{product.quantity}</span>
      <input
        type="button"
        onClick={() => dispatch(removeProductFromCart(index))}
        value="x"
      />
    </div>
  );

  const countItems = () =>
    state
      .reduce((acc, cur) => {
        return parseFloat(acc + (cur.quantity || 1));
      }, 0)
      .toFixed(0);

  return (
    <div>
      <div className="w-60 border px-2">
        <h1 className="py-3 border-b ">My Cart ({countItems})</h1>
        <div className="flex py-3 border-b items-center space-x-2">
          {state.length ? state.products.map(renderProduct) : "cart is empty."}
          <h1>total</h1>
          <h1>Rs {state.reduce(calculateTotal, 0).toFixed(2)}</h1>
          <button className="border border-black w-6 h-6">&#10005;</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
