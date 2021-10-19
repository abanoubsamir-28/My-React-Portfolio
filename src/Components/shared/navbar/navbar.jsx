import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            Shop App
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          <Link to="/" className="text-decoration-none text-white mx-3">
            Home
          </Link>
          <Link to="/shop" className="text-decoration-none text-white mx-3">
            Products
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
