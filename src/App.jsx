import Cart from "./components/Cart/Cart";
import Products from "./pages/Products/Products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
      );
    } else {
      setCart([
        ...cart,
        {
          product: product,
          quantity: 1,
        },
      ]);
    }
  }

  function addQuantity(productId) {

    setCart(
      cart.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  }
  return (
    <div>
      <Products addToCart={addToCart} />
      <Cart cart={cart} addQuantity={addQuantity} />
    </div>
  );
}

export default App;
