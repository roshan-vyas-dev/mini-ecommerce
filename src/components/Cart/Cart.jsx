function Cart({ cart, addQuantity, decreaseQuantity, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  return (
    <div>
      {cart.map((item) => (
        <div className="border rounded p-3 shadow-sm flex gap-4">
          <p key={item.product.id}>
            {item.product.name} x {item.quantity}
          </p>

          <p>₹{item.product.price.toLocaleString("en-IN")}</p>
          <p>
            Total: ₹
            {(item.product.price * item.quantity).toLocaleString("en-IN")}
          </p>
          <button
            onClick={() => addQuantity(item.product.id)}
            className="p-2 border rounded-lg bg-green-400 text-white"
          >
            +
          </button>

          <button
            onClick={() => decreaseQuantity(item.product.id)}
            className="p-2 border rounded-lg bg-red-400 text-white"
          >
            -
          </button>
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="p-2 border rounded-lg bg-red-600 text-white"
          >
            Remove
          </button>
        </div>
      ))}

      <p>Cart Total :{cartTotal}</p>
    </div>
  );
}

export default Cart;
