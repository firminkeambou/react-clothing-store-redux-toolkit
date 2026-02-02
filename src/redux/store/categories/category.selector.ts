//this importation helps for memoization
import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoryMap } from '../../../utils/firebase/firebase.utils.types';
const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc: CategoryMap, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsCategoriesLoading = (state: RootState) =>
  state.categories.isLoading;
