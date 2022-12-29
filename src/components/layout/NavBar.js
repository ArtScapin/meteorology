import { Container, Navbar } from "react-bootstrap";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className={style.nav}>
        <Navbar.Brand>Meteorology</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
