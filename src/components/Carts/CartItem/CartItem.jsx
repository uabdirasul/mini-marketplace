import { useCart } from "../../../hooks/useCart";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.title, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.title, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.title);
  };

  const itemTotal = (parseFloat(item.price) * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img
          className="cart-item__img"
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
        />
        <div className="cart-item__details">
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <p>Subtotal: ${itemTotal}</p>
        </div>
      </div>
      <div className="cart-item__controls">
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button onClick={handleRemove} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
