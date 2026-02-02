//import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../redux/store/cart/cart.selector';
import { setIsCartOpen } from '../../redux/store/cart/cart.reducer';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const cartCount = useAppSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
