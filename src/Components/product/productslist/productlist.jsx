import { useEffect, useState } from "react";
import ProductcardComponent from "../productcard/productcard";
import { Spinner } from "react-bootstrap";
import ControlledCarousel from "../carousel/carousel";

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
        <section >
          <div className="carousel my-5">
            <ControlledCarousel
              productsList={products}
              className="position-static"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center container flex-column">
            <div className="d-flex flex-wrap justify-content-center">
              {products.map((product) => {
                return (
                  <ProductcardComponent
                    productItem={product}
                    key={product.id}
                  ></ProductcardComponent>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
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
