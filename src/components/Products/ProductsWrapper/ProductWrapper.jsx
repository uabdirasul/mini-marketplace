import ProductItem from "../ProductItem/ProductItem";
import "./ProductWrapper.css";

const ProductWrapper = () => {
  const fakeData = [
    {
      image:
        "https://i.pinimg.com/1200x/17/72/48/17724890396cc18e5c65474ecef8615c.jpg",
      title: "Product 1",
      price: "$10"
    },
    {
      image:
        "https://i.pinimg.com/736x/dd/a6/2a/dda62a139cf181ac45236d3e9203cd8a.jpg",
      title: "Product 2",
      price: "$100"
    },
    {
      image:
        "https://i.pinimg.com/736x/dd/a6/2a/dda62a139cf181ac45236d3e9203cd8a.jpg",
      title: "Product 2",
      price: "$120"
    }
  ];
  console.log(fakeData);
  return (
    <div className="product-wrapper">
      <h2>Products</h2>
      <div className="product-wrapper__container">
        {fakeData.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductWrapper;
