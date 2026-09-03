import { useState } from "react";

function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">
          Add some products before checking out.
        </p>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <section className="rounded border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Customer Information</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block font-medium"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded border p-2"
            />
          </div>
        </div>
      </section>

      <section className="rounded border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

        <div className="space-y-3">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between gap-4 border-b pb-3"
            >
              <div>
                <p className="font-medium">{item.product.title}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>

              <p className="font-medium">
                ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </section>

      <button
        type="button"
        className="w-full rounded bg-black px-4 py-3 font-semibold text-white"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;