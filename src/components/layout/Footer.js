import { Container } from "react-bootstrap";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import style from "./Footer.module.css";

function Footer() {
  return (
    <Container className={style.footer}>
      <div>
        <FaLinkedinIn />
        <FaInstagram />
        <TiWeatherCloudy />
        <br />
        <p>Meteorology &copy; 2022</p>
      </div>
    </Container>
  );
}

export default Footer;
