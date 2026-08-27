
function ProductCard({product,addToCart}) {
  return (
    <div className="border rounded p-3 shadow-sm ">
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>₹{product.price.toLocaleString("en-IN")}</p>

      <button className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500"
      onClick={()=>addToCart(product)}
      >Add to Cart</button>

    </div>
  )
}

export default ProductCard