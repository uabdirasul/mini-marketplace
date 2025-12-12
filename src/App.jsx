import "./App.css";
import Header from "./components/Header/Header";
import ProductWrapper from "./components/Products/ProductsWrapper/ProductWrapper";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ProductWrapper />
    </div>
  );
};

export default App;
