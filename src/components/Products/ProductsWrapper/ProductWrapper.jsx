import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductWrapper.css";

const ProductWrapper = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch products. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return (
    <div className="product-wrapper">
      <h2 className="product-wrapper__title">Products</h2>
      <div className="product-wrapper__container">
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : null}
        {products.length > 0 &&
          products.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
      </div>
    </div>
  );
};

export default ProductWrapper;
