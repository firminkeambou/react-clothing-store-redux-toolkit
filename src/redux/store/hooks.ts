import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import store from './store';
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(selector: (state: RootState) => T) => T =
  useSelector;
export const useAppStore: () => typeof store = useStore;
