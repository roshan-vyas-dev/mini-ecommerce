import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products({ addToCart }) {
  return (
    <div>
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
