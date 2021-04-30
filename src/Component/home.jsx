import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import ProductCart from "./ProductCart";
import {categoriesFetchData} from "../redux/Action/categories";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories);
  const state1 = useSelector((state) => state.categoriesIsloading);
  const [active, setActive] = useState(0);
  const handleSelection = (e) => {
    e.preventDefault();
    const index = parseInt(e.target.getAttribute("index"), 10);
    return setActive(index);
  };
  const isActive = (index) => {
    return index === active;
  };

  const renderCategory = (item, index) => (
    <Navbar
      key={index}
      active={isActive(index)}
      item={item}
      index={index}
      handleSelection={handleSelection}
    />
  );
  const renderProduct = (item, index) => (
    <ProductCart key={index} item={item} />
  );

  const url =
    "https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories";

  useEffect(async () => {
    return () => {};
  }, []);
  if (state1) return <span>loading...</span>;
  return (
    <div>
      <div className="">{state.map(renderCategory)}</div>
      <div className="">
        {state[active] ? state[active].products.map(renderProduct) : false}
      </div>
    </div>
  );
};

export default Home;
