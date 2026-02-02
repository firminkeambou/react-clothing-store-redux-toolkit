import { createSlice } from '@reduxjs/toolkit'; // this method is use to create a reducer and action types, no more need of creating a personnal action

//import { setCurrentUser } from './user.action';

//import { USER_ACTION_TYPES } from './user.types';

// bear in mind that, with redux-persist, redux-toolkit uses initiatialState from the local storage if any, so whenever there is a change in InititiaState, clear the local storage to see the effect
import { Category } from '../../../utils/firebase/firebase.utils.types';
import { ActionWithPayloadType } from '../../../utils/reducer/reducer.utils';

export type CategorieState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
};
export const CATEGORIES_INITIAL_STATE: CategorieState = {
  categories: [],
  isLoading: false,
};
/* : {
        payload: Category[];
        type: string;
      } */
export const categoriesSlice = createSlice({
  name: 'categories', // nameSpace like 'categories' in "categories/SET_CATEGORIES" old action
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action: ActionWithPayloadType<Category[]>) {
      // generating an action and a reducer in one go  // the call to setCategories will be done with a ready payload
      state.categories = action.payload; // even if it looks like a mutation, it's not the case, because , under the hood, redux toolkit is user the library "immer" to generate a new object
    }, // function that receives a state, action and return an object // actionCreator function
    setIsLoading(state, action: ActionWithPayloadType<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setCategories, setIsLoading } = categoriesSlice.actions; // this is an action creator; actions is one of the object returned  by the use of "createSlice", action generated;; the payload is implied
export const categoriesReducer = categoriesSlice.reducer;
