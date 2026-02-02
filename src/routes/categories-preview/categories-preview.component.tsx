import { Fragment } from 'react';
//import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/store/hooks';
import Spinner from '../../components/spinner/spinner.component';
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from '../../redux/store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  //const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesMap = useAppSelector(selectCategoriesMap);
  //const isCategoriesLoading = useSelector(selectIsCategoriesLoading);
  const isCategoriesLoading = useAppSelector(selectIsCategoriesLoading);
  console.log('CategoriesPreview render', isCategoriesLoading);

  return (
    <Fragment>
      {isCategoriesLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
