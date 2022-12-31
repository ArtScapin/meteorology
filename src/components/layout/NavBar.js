import { Container } from "react-bootstrap";
import style from "./NavBar.module.css";

function NavBar() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className={style.navbar}>
      <Container>
        <h1>Meteorology</h1>
      </Container>
    </div>
  );
}

export default NavBar;
