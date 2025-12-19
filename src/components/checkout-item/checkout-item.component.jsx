import { useDispatch } from 'react-redux';
//, useSelector from 'react-redux'
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/store/cart/cart.reducer';
//import { selectCartItems } from '../../redux/store/cart/cart.selector';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);

  // dispatch(clearItemFromCart(cartItems, cartItem));// old way redux
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem)); // redux toolkit way

  //const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));, old way redux
  const addItemHandler = () => dispatch(addItemToCart(cartItem)); // redux toolkit way

  //const removeItemHandler = () =>     dispatch(removeItemFromCart(cartItems, cartItem)); // old way redux
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem)); // redux toolkit way

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
