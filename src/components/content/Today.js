import { Row, Col } from "react-bootstrap";
import {
  WiThermometerExterior,
  WiStrongWind,
  WiHumidity,
  WiCelsius,
} from "react-icons/wi";
import { MdLocationOn } from "react-icons/md";
import Section from "../layout/Section";
import style from "./Today.module.css";

function Today({ current, location }) {
  const local = location.name;
  const { temp_c, feelslike_c, wind_kph, humidity, last_updated } = current;

  return (
    <Section>
      <p className={style.title}>Dados Meteorológicos atuais</p>
      <div className={style.content}>
        <Row>
          <Col>
            <span className={style.location}>
              <MdLocationOn />
              {local}
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className={style.temp}>
              {temp_c}
              <WiCelsius />
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className={style.details}>
              <WiThermometerExterior />
              {feelslike_c}°
            </span>
            <span className={style.details}>
              <WiStrongWind />
              {wind_kph} Km/h
            </span>
            <span className={style.details}>
              <WiHumidity />
              {humidity} %
            </span>
          </Col>
        </Row>
      </div>
      <p className={style.updateAt}>
        Atualizado em {last_updated.split(" ")[0].split("-")[2]}/
        {last_updated.split(" ")[0].split("-")[1]}/
        {last_updated.split(" ")[0].split("-")[0]} {last_updated.split(" ")[1]}
      </p>
    </Section>
  );
}

export default Today;
