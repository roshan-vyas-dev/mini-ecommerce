import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart/Cart";

function AppRoutes({
  cart,
  addToCart,
  addQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Products addToCart={addToCart} />

            <Cart
              cart={cart}
              addQuantity={addQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        }
      />
      <Route path="/checkout" element={<Checkout cart={cart} />} />
    </Routes>
  );
}

export default AppRoutes;
