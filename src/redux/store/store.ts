// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from 'redux'; now the following replaces the above import
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { loggerMiddleware } from './middleware/logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
); // creates an object like {true}, {false} ." middleware is Middleware" reminds us predicate;

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

/* export const store = createStore(
   persistedReducer,// 
   undefined,
   composedEnhancers
 );  The store configuration becomes*/

export const store = configureStore({
  //reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // to turn off the serializable check for redux-persist, the other way is create an immediate function to exctract from a non-serializable value the serializable values only // like this in App.js:
    }).concat(middleWares),
  //middleware: () => middleWares, // this property turn off default middleware which encompasses redux-thunk
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, users: UsersState}

export type AppDispatch = typeof store.dispatch;

export default store;
