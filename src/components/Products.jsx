import { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const api_url = "https://dummyjson.com/products";
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <h2 className="text-center p-2">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div> {/* row */}
      </div> {/* container */}
    </>
  );
}

export default Products;
