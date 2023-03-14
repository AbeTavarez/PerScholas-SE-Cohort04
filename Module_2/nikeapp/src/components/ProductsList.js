import ProductListItem from "./ProductListItem";

function ProductsList(props) {
  const { products, addToCart, cart } = props;

  return products.map((item) => (
    <ProductListItem 
      product={item} 
      key={item.id} 
      addToCart={addToCart} 
      cart={cart}
      />
  ));
}

export default ProductsList;
