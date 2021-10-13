import { Navbar, Container, Nav } from "react-bootstrap";
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

function NavBar() {
  return (
    <nav className="navs">
      <Navbar bg="" expand="lg">
        <Container>
          <Rotate top left>
            <Navbar.Brand href="#home">Netaniel Wahnich</Navbar.Brand>
          </Rotate>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
            <Fade right>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Fade>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;
