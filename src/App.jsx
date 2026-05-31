import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Keyboard", price: 50 },
  { id: 4, name: "Headphones", price: 120 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <Header title="Product Store" subtitle="React Practice App" />

      <div className="products-list">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            onAddToCart={() => handleAddToCart(p)}
            isInCart={cart.some((item) => item.id === p.id)}
          />
        ))}
      </div>

      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} total={total} />
    </div>
  );
}
