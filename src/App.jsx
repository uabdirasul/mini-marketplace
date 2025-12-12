import "./App.css";
import CartList from "./components/Carts/CartList/CartList";
import Header from "./components/Header/Header";
import ProductWrapper from "./components/Products/ProductsWrapper/ProductWrapper";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <Header />
        <div className="main-content">
          <ProductWrapper />
          <CartList />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
