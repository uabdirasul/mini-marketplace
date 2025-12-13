import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductWrapper.css";

const ProductWrapper = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  };

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <div className="product-wrapper">
      <h2 className="product-wrapper__title">Products</h2>
      <div className="product-wrapper__container">
        {products.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductWrapper;
