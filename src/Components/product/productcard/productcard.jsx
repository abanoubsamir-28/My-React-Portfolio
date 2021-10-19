import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductcardComponent(props) {
  return (
    <Card style={{ width: "18rem" }} className="m-5 d-flex">
      <Card.Img variant="top" src={props.productItem.image} style={{ width: "18rem" ,height: "18rem"}}/>
      <Card.Body>
        <Card.Title>{props.productItem.title.substr(0,20)}</Card.Title>
        <Card.Text>
          {props.productItem.description.substr(0,90)+'...'}
        </Card.Text>
        <Link to={`product/${props.productItem.id}`} key={props.productItem.id} className="btn btn-warning text-white fw-bold">Details</Link>
      </Card.Body>
    </Card>
  );
}

export default ProductcardComponent;
