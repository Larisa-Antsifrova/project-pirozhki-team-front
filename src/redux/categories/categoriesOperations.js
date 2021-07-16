import axios from 'axios';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './categoriesActions';

axios.defaults.baseURL = 'https://awesome-wallet-app.herokuapp.com';

export const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest());

  try {
    const { data } = await axios.get('​/categories​/hardcoded');
    dispatch(fetchCategoriesSuccess(data.data));
  } catch (error) {
    dispatch(fetchCategoriesError());
  }
};
