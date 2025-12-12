import { useCart } from "../../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";

const CartList = () => {
  const { cart, getCartTotal, clearCart, getCartItemsCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-list">
        <h2>Shopping Cart</h2>
        <p>The cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-list">
      <h2>Shopping Cart</h2>
      <div className="header__cart">
        <span>🛒 Cart ({getCartItemsCount()})</span>
      </div>
      <div className="cart-items">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getCartTotal().toFixed(2)}</h3>
        <button onClick={clearCart} className="clear-cart-button">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
