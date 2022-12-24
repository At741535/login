import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
// const search = async () => {
//   await searchUser();
// };

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <LinkContainer to={"/"} style={{ marginLeft: "2rem" }}>
            <Nav.Link>REGISTER</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/login"} style={{ marginLeft: "2rem" }}>
            <Nav.Link>LOGIN</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/showlist"} style={{ marginLeft: "2rem" }}>
            <Nav.Link>SHOWLIST</Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
