function Cart({ cart, onRemoveFromCart, onClearCart, total }) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>{item.price}€</p>

              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: {total}€</h3>

          <button className="clear-btn" onClick={onClearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
