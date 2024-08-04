function Product(props) {
  console.log(props); // Corrected console log

  return (
    <>
      <div className="card">
        <img
          src={props.product.images[0]} 
          className="card-img-top" 
          alt={props.product.title} 

          height={200}
        />
        <div className="card-body">
          <h4>{props.product.title}</h4>
          <h4>${props.product.price.toFixed(2)}</h4> {/* Formatting price */}
          <p>{props.product.description}</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </>
  );
}

export default Product;
