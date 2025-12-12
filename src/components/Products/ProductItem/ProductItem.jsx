import { useCart } from "../../../hooks/useCart";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item_container">
      <img
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="product-item__img"
      />
      <div className="product-item__info">
        <h3 className="product-item__title">{product.title}</h3>
        <p className="product-item__price">{product.price}</p>
        <button className="product-item__button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
