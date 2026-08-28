function Cart({ cart,addQuantity,decreaseQuantity }) {
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
          <button onClick={()=>addQuantity(item.product.id)}>+</button>
          <button onClick={()=>decreaseQuantity(item.product.id)}>-</button>
        </div>
      ))}

      <p>Cart Total :{cartTotal}</p>
    </div>
  );
}

export default Cart;
