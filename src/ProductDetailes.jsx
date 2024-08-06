import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './App'

function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product))
            .catch((error) => console.error("Error fetching product:", error));
    }, [params.productId]);

    return (
        <div className="pro_ditales">
            <h1>Product Details: (ID: {params.productId})</h1>
            {product.images && product.images.length > 0 && (
                <img src={product.images[0]} className="card-img-top" height={400} width={200} alt={product.title}/>
            )}
            <h4>{product.title}</h4>
            <h4>${product.price}</h4>
            <h6>{product.description}</h6>
        </div>
    );
}

export default ProductDetails;
