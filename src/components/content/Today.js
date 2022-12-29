import { Row, Col, Image } from "react-bootstrap";
import { WiCloudy, WiStrongWind, WiHumidity, WiCelsius } from "react-icons/wi";
import Section from "../layout/Section";
import style from "./Today.module.css";

function Today({ location, temp, icon, cloud, wind, humidity, updateAt }) {
  return (
    <Section>
      <div className={style.content}>
        <Row>
          <Col>
            <span className={style.location}>{location}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className={style.temp}>
              <Image src={icon} />
              {temp}
              <WiCelsius />
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className={style.details}>
              <WiCloudy />
              {cloud} %
            </span>
            <span className={style.details}>
              <WiStrongWind />
              {wind} Km/h
            </span>
            <span className={style.details}>
              <WiHumidity />
              {humidity} %
            </span>
          </Col>
        </Row>
      </div>
      <p className={style.updateAt}>Atualizado em {updateAt}</p>
    </Section>
  );
}

export default Today;
