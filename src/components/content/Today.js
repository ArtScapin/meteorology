import { Container, Row, Col, Image } from "react-bootstrap";
import { WiCloudy, WiStrongWind, WiHumidity, WiCelsius } from "react-icons/wi";
import style from "./Today.module.css";

function Today({ location, temp, icon, cloud, wind, humidity, updateAt }) {
  return (
    <Container className={style.container}>
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
      <p>Atualizado em {updateAt}</p>
    </Container>
  );
}

export default Today;
