function ProductCard({ title, price, image, onAddToCart, isInCart }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="product-img" />

      <h3>{title}</h3>
      <p>{price}€</p>

      <button onClick={onAddToCart} disabled={isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
