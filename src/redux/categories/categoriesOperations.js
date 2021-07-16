import axios from 'axios';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './categoriesActions';

export const fetchCategories = () => async dispatch => {
  dispatch(fetchCategoriesRequest());

  try {
    const {
      data: {
        data: { categories },
      },
    } = await axios.get('/categories/hardcoded');

    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError());
  }
};
