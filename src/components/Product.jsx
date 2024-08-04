function Product(props) {
  console.log(props); // Corrected console log

  // Destructure props for cleaner code
  const { images, title, price, description } = props.product;

  return (
    <>
      <div className="card">
        <img
          src={images && images.length > 0 ? images[0] : "https://via.placeholder.com/200"}
          className="card-img-top"
          alt={title || "Product Image"}
          height={200}
        />
        <div className="card-body">
          <h4>{title}</h4>
          <h4>${price.toFixed(2)}</h4> {/* Formatting price */}
          <p>{description ? description.substring(0, 100) + "..." : "No description available."}</p> {/* Limiting description */}
          <button className="btn btn-primary" aria-label={`More details about ${title}`}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
