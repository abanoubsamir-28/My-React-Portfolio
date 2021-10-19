import {Nav , Navbar , Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavbarComponent () {
    return (
        <Navbar bg="dark" expand="lg">
        <Container >
          <Navbar.Brand href="#home" className="text-white">
              Shop App
          </Navbar.Brand>
            <Nav className="ms-auto">
              
              <Nav.Link>
                <Link to ="/" className="text-decoration-none text-white">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to ="shop" className="text-decoration-none text-white">Products</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to ="login" className="text-decoration-none text-white">Login</Link>
              </Nav.Link>
              <Nav.Link  >
                <Link to="/register" className="text-white btn btn-success text-capitalize">
                get started
                </Link>
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent ; 