import { createSlice } from '@reduxjs/toolkit'; // this method is use to create a reducer and action types, no more need of creating a personnal action
//import { setCurrentUser } from './user.action';

//import { USER_ACTION_TYPES } from './user.types';

// bear in mind that, with redux-persist, redux-toolkit uses initiatialState from the local storage if any, so whenever there is a change in InititiaState, clear the local storage to see the effect
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: 'categories', // nameSpace like 'categories' in "categories/SET_CATEGORIES" old action
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      // generating an action and a reducer in one go  // the call to setCategories will be done with a ready payload
      state.categories = action.payload; // even if it looks like a mutation, it's not the case, because , under the hood, redux toolkit is user the library "immer" to generate a new object
    }, // function that receives a state, action and return an object // actionCreator function
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setCategories, setIsLoading } = categoriesSlice.actions; // this is an action creator; actions is one of the object returned  by the use of "createSlice", action generated;; the payload is implied
export const categoriesReducer = categoriesSlice.reducer;
