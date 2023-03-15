import ProductListItem from "./ProductListItem";

// Context
import { ProductContext } from "../App";
import { useContext } from "react";

function ProductsList() {
  // 3. Consume the data from the context
  const productContextValue = useContext(ProductContext);
  // console.log(productContextValue.data);

  return productContextValue.data.map((item) => (
    <ProductListItem 
      product={item} 
      key={item.id} 
      />
  ));
}

export default ProductsList;
