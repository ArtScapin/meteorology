import { Container } from "react-bootstrap";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.navbar}>
      <Container>
        <h1>Meteorology</h1>
      </Container>
    </div>
  );
}

export default NavBar;
