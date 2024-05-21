
import { CartContext } from '../../contexts/cart.context';
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';
import { useContext } from 'react';

const CartIcon = () => {
    const{isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;