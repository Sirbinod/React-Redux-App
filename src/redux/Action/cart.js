import {actionType} from "./actionType";

export const addProductToCart = (product) => {
  return {
    type: actionType.ADD_PRODUCT_TO_CART,
    product,
  };
};

export const removeProductFromCart = (index) => {
  return {
    type: actionType.REMOVE_PRODUCT_FROM_CART,
    index,
  };
};
