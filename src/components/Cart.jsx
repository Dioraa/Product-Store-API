const Cart = ({ cart, onRemoveFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>
              {item.name} - {item.price}€
            </span>

            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: {total}€</h3>
    </div>
  );
};

export default Cart;
