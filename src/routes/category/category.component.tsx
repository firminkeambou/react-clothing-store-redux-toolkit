import { useState, useEffect, Fragment } from 'react';
//import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/store/hooks';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../redux/store/categories/category.selector';

import { CategoryContainer, Title } from './category.styles';
// this is to enforce that category always as a value and can't be undefined as we know it
type categoryRouteParams = {
  category: string;
};
//
const Category = () => {
  //const { category } = useParams(); old without typeScript
  //const { category } = useParams(); //before typeScript
  const { category } = useParams<
    keyof categoryRouteParams
  >() as categoryRouteParams; // the final cast allow us to be sure tha "Undefined type dissapear" and we remain with category as a string only
  //const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
