import { Middleware } from 'redux';
import { RootState } from '../store';

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const specificAction = action as { type: string; payload: any };
    if (!specificAction.type) {
      return next(action);
    }

    console.log('type: ', specificAction.type);
    console.log('payload: ', specificAction.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
  };
