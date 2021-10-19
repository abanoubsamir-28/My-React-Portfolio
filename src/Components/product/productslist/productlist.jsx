import { useEffect, useState } from "react";
import ProductcardComponent from "../productcard/productcard";

function ProductlistComponent() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
      <div className="d-flex flex-wrap justify-content-center container">
          {
        products.map(product=> {
            return (<ProductcardComponent productItem={product}></ProductcardComponent>)
        })}
      </div>
  )
      
}

export default ProductlistComponent;
