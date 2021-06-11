import { getDefaultNormalizer } from "@testing-library/dom";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar1() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" className="sticky-top">
      <Navbar.Brand>Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            Logout
          </Nav.Link>
          <Nav.Link as={Link} to="/myprofile">
            My Profile
          </Nav.Link>
          <Navbar.Text>Signed in</Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
