import { useContext } from "react";
import { ProductContext } from "../App";

function ProductListItem(props) {
    const { product } = props;
    // Consume the context
    const productContextValue = useContext(ProductContext);
    const {cart, setCart} = productContextValue;

    // console.log(productContextValue);

    const handleAddToCart = () => {
        setCart( [...cart, product] )
    }

    return (
        <div>
        <h6>{product.name}</h6>
        <img src={product.image} width="200" alt={product.name}/>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    )
}

export default ProductListItem;