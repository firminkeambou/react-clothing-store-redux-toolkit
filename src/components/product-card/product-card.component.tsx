//import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../redux/store/hooks';
//, useSelector from 'react-redux'
//import { selectCartItems } from '../../redux/store/cart/cart.selector';
import { addItemToCart } from '../../redux/store/cart/cart.reducer';
import { CategoryItem } from '../../utils/firebase/firebase.utils.types';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';
type ProductCardProps = {
  product: CategoryItem;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();
  //const cartItems = useSelector(selectCartItems); // no more needed in redux toolkit way

  //const addProductToCart = () => dispatch(addItemToCart(cartItems, product)); // old way redux
  const addProductToCart = () => dispatch(addItemToCart(product)); // redux toolkit way

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
