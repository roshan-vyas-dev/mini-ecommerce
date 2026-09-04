import { Link, useParams } from "react-router-dom";
import products from "../../data/products";

function ProductDetails({ addToCart }) {
  const { productId } = useParams();

  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-4">
      <Link
        to="/"
        className="mb-4 inline-block text-sm font-medium hover:underline">
        ← Back to Products
      </Link>

      <h1 className="text-2xl font-bold">{product.name}</h1>

      <p>{product.category}</p>

      <p>₹{product.price.toLocaleString("en-IN")}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 rounded bg-sky-400 px-4 py-2 text-white hover:bg-sky-500"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
