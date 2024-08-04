import { useEffect, useState } from "react";
import Product from "./Product";
// import Pagination from "./Pagination.JSX";

function Products() {
  const productsPerPage = 30; // Number of products per page
  
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const api_url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`;
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [currentPage]); // the fetch changing and will return the data based on page number

  // Calculate total pages
  const totalPages = Math.ceil(200 / productsPerPage); // Adjust according to total product count

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        
        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center m-3" >
            {[...Array(totalPages).keys()].map(number => (
              <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(number + 1)} className="page-link">
                  {number + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div> {/* container */}
    </>
  );
}

export default Products;
