import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <Navbar style={{ backgroundColor: "#2563EB" }} variant="dark" expand="lg" sticky="top" className="px-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-white fw-bold">QrCode Generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <Nav.Link as={Link} to="/business-card" className="text-white">Business Cards</Nav.Link>
              <Nav.Link as={Link} to="/link" className="text-white">Links</Nav.Link>
              <Nav.Link as={Link} to="/image" className="text-white">Images</Nav.Link>
              <Nav.Link as={Link} to="/document" className="text-white">Documents</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default HeaderComponent
