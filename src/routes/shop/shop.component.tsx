import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../redux/store/hooks';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  setCategories,
  setIsLoading,
} from '../../redux/store/categories/category.reducer';

const Shop = () => {
  //const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(setIsLoading(true));
      //const categoriesArray = await getCategoriesAndDocuments('categories');
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      dispatch(setIsLoading(false));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
