import { useEffect, useState } from "react";
import ProductcardComponent from "../productcard/productcard";
import { Spinner } from "react-bootstrap";

function ProductlistComponent() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {products ? (
        <div className="d-flex flex-wrap justify-content-center container flex-column">
          <h1 className="text-center py-5 text-capitalize fw-bold text-black">
            Our Products
          </h1>
          <div className="d-flex flex-wrap justify-content-center">
            {products.map((product) => {
              return (
                <ProductcardComponent
                  productItem={product}
                ></ProductcardComponent>
              );
            })}
          </div>
        </div>
      ) : (
        // Wanna Ask About in Lab , why didn't Work ?
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          className="p-5 m-5"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default ProductlistComponent;
