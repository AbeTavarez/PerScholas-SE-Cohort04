

function ProductListItem(props) {
    const { product, addToCart, cart } = props;

    const handleAddToCart = () => {
        addToCart( [...cart, product] )
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