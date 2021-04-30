import {actionType} from "./actionType";
import {fetchCategories} from "../../service/fatchCategories";

export const categoriesIsLoading = (bool) => {
  return {
    type: actionType.CATEGORIES_IS_LOADING,
    isLoading: bool,
  };
};

export const categoriesFetchDataSuccess = (categories) => {
  return {
    type: actionType.CATEGORIES_FETCH_DATA_SUCCESS,
    categories,
  };
};

export const categoriesFetchData = (url) => {
  return async (dispatch) => {
    dispatch(categoriesIsLoading(true));
    const categories = await fetchCategories(url);
    dispatch(categoriesFetchDataSuccess(categories));
    dispatch(categoriesIsLoading(false));
  };
};
