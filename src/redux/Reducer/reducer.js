import {ADD_TO_CART} from "../Action/actionType";

const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        counter: !state.counter ? 1 : state.counter + 1,
      };
    default:
      return state;
  }
};
export default reducer;
