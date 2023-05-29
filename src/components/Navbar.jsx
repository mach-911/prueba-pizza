import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import context from '../my_context';

function Navigation() {
  const {totalCarrito, carrito} = useContext(context);
  return (
    <Navbar bg="info" expand="lg" theme>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          {" "}
          🍕 MAMMA MIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/carrito" className="bg-light rounded">
              🛒 Carrito{" "} {totalCarrito(carrito)}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;