import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <h1>Product Details: {product.title} (ID: {params.productId})</h1>
    );
}

export default ProductDetails;
