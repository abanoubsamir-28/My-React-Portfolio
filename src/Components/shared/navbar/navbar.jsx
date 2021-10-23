import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            React Portfolio
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          <Link to="/" className="text-decoration-none text-white mx-3">
            Who Am I ?
          </Link>
          <Link to="/counter" className="text-decoration-none text-white mx-3">
            Simple Counter
          </Link>
          <Link to="/shop" className="text-decoration-none text-white mx-3">
            Shop
          </Link>
          <Link to="/todo" className="text-decoration-none text-white mx-3">
            Todo list
          </Link>
          <Link to="/login" className="text-decoration-none text-white mx-3">
            Login
          </Link>
          <Link
            to="/register"
            className="text-white btn btn-success text-capitalize mx-3"
          >
            get started
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
