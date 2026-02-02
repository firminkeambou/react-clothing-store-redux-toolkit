import { createSlice } from '@reduxjs/toolkit'; // this method is use to create a reducer and action types, no more need of creating a personnal action
//import { setCurrentUser } from './user.action';
import { UserData } from '../../../utils/firebase/firebase.utils.types';
import { ActionWithPayloadType } from '../../../utils/reducer/reducer.utils';
//import { USER_ACTION_TYPES } from './user.types';

export type UserDataLocal = {
  accessToken: string;
  displayName: string;
  email: string;
};
export type StoredLocalUser = UserDataLocal | null;

export type UserState = {
  readonly currentUser: StoredLocalUser;
};
const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user', // nameSpace like 'user' in "user/SET_CURRENT_USER" old action
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action: ActionWithPayloadType<StoredLocalUser>) {
      state.currentUser = action.payload; // even if it looks like a mutation, it's not the case, because , under the hood, redux toolkit is user the library "immer" to generate a new object
    }, // function that receives a state, action and return an object
  },
});

export const { setCurrentUser } = userSlice.actions; // this is an action creator; actions is one of the object returned  by the use of "createSlice", action generated;; the payload is implied

export const userReducer = userSlice.reducer;
/* 
 old Normal userReducer without  '@reduxjs/toolkit'  but only redux 
 

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
 */
