import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import "./App.css";

const title = "Product Store";
const API_URL = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header title={title} subtitle="Simple Product Store" />

      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      <div className="layout">
        <div className="products">
          {products.map((product) => {
            const isInCart = cart.some((item) => item.id === product.id);

            return (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                onAddToCart={() => handleAddToCart(product)}
                isInCart={isInCart}
              />
            );
          })}
        </div>

        {cart.length > 0 && (
          <Cart
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={handleClearCart}
            total={total}
          />
        )}

        {/* <Cart
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          total={total}
        /> */}
      </div>
    </div>
  );
}

export default App;
