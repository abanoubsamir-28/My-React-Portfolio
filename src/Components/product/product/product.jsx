import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import TextRating from "../rating/rating";
import "./product.css";

function ProductComponent(match) {
  const producId = match.match.params.id;
  const [product, setproduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${producId}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
    console.log(product);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {product ? (
        <section className="product m-3 vh-50 bg-dark text-white">
          <div className="container d-flex">
            <div className="product__text w-75 p-3">
              <h2 className="my-4">{product.title}</h2>
              <p className="text-capitalize text-muted">{product.category}</p>
              <p className="py-4 w-75">{product.description}</p>
               <TextRating rate={product.rating.rate}></TextRating> 
               <span>By {product.rating.count} User</span> 
               <h4 className="my-5">Prdocut Price : {Math.ceil(product.price) + " EGP"}</h4>
            </div>
            <figure className="w-25">
              <img src={product.image} className="w-100 my-5" />
            </figure>
          </div>
        </section>
      ) : (
        <Spinner animation="border" role="status" variant="primary" className="p-5">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
export default ProductComponent;
