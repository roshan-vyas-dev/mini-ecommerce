import { Link } from "react-router-dom";

function Cart({ cart, addQuantity, decreaseQuantity, removeFromCart }) {
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }
  const cartTotal = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  return (
    <div className="p-4 space-y-4">
      <h2 className="font-semibold text-2xl mb-3">Your Cart</h2>
      {cart.map((item) => (
        <div
          className="border rounded p-3 shadow-sm flex flex-wrap gap-4 "
          key={item.product.id}
        >
          <p>
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

          <span className="font-semibold ">{item.quantity}</span>

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

      <div className="border-t pt-3">
        <p className="text-2xl font-semibold">Cart Total : ₹{cartTotal}</p>

        <Link
          to="/cart"
          className="inline-block mt-3 mr-2 rounded border px-4 py-2"
        >
          View Cart
        </Link>

        <Link
          to="/checkout"
          className="inline-block mt-3 rounded bg-black px-4 py-2 text-white"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
