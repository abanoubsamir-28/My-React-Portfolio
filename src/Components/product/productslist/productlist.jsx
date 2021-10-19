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
      <div className="d-flex flex-wrap justify-content-center container flex-column">
        <h1 className="text-center py-5 text-capitalize fw-bold">Our Products</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {
        products.map(product=> {
            return (<ProductcardComponent productItem={product}></ProductcardComponent>)
        })}
        </div>
      </div>
  )
      
}

export default ProductlistComponent;
