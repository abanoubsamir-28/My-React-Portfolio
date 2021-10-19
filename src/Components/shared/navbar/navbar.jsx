import {Nav , Navbar , Container} from 'react-bootstrap'
function NavbarComponent () {
    return (
        <Navbar bg="dark" expand="lg">
        <Container >
          <Navbar.Brand href="#home" className="text-white">
              Shop App
          </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#link" className="text-white">Products</Nav.Link>
              <Nav.Link href="#link" className="text-white">Login</Nav.Link>
              <Nav.Link href="#link" className="text-white btn btn-success text-capitalize">get started</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent ; 