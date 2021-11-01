import { Navbar, Container, Nav } from "react-bootstrap";
// import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import Logo from '..//img/portfolio.png'


function NavBar() {
  return (
    <nav className="navs">
      <Navbar bg="" expand="lg">
        <Container>
          
            <Navbar.Brand href="/" className='logo'>
              <img src={Logo} alt='portfolio'/>
            </Navbar.Brand>
            
          
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
