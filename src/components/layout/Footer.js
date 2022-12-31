import { Container } from "react-bootstrap";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import style from "./Footer.module.css";

function Footer() {
  return (
    <Container className={style.footer}>
      <div>
        <a href="https://www.linkedin.com/in/arthur-scapin-pereira-a130b0243/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/arthscapin/">
          <FaInstagram />
        </a>
        <a href="https://www.weatherapi.com/">
          <TiWeatherCloudy />
        </a>
        <br />
        <p>Meteorology &copy; 2022</p>
      </div>
    </Container>
  );
}

export default Footer;
