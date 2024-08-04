import { useParams } from "react-router-dom"

function ProductDetailes (){
    const params = useParams()
    console.log(params)
    return (
        <h1>Product Detalies</h1>
    )

}

export default ProductDetailes 