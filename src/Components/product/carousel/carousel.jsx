import "./carousel";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(2);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src={props.productsList[5].image}
          alt="First slide"
          style={{ width: "18rem", height: "18rem" }}
        />
        <Carousel.Caption>
          <h3 className="text-black fw-bold ">{props.productsList[5].title}</h3>
          <p className="text-black fw-bold">
            {props.productsList[5].description.substr(0, 100)}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src={props.productsList[6].image}
          alt="First slide"
          style={{ width: "18rem", height: "18rem" }}
        />
        <Carousel.Caption>
          <h3 className="text-black fw-bold">{props.productsList[6].title}</h3>
          <p className="text-black fw-bold">
            {" "}
            {props.productsList[6].description.substr(0, 100)}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src={props.productsList[7].image}
          alt="First slide"
          style={{ width: "18rem", height: "18rem" }}
        />
        <Carousel.Caption>
          <h3 className="text-black fw-bold">{props.productsList[7].title}</h3>
          <p className="text-black fw-bold">
            {" "}
            {props.productsList[7].description.substr(0, 100)}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src={props.productsList[3].image}
          alt="First slide"
          style={{ width: "18rem", height: "18rem" }}
        />
        <Carousel.Caption>
          <h3 className="text-black fw-bold">{props.productsList[3].title}</h3>
          <p className="text-black fw-bold">
            {" "}
            {props.productsList[3].description.substr(0, 100)}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
