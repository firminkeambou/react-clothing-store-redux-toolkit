import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { CartItem as CartItemType } from '../../utils/firebase/firebase.utils.types';
export type CartItemProps = {
  key: number;
  cartItem: CartItemType;
};
const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
