import { Row, Col } from "react-bootstrap";
import { BsArrowDownUp } from "react-icons/bs";
import { WiCloudy, WiStrongWind, WiHumidity } from "react-icons/wi";
import style from "./ForecastDay.module.css";

function ForecastDay({ day, tempMin, tempMax, cloud, wind, humidity }) {
  return (
    <div className={style.card}>
      <Row className={style.title}>
        <Col>
          <span>{day}</span>
        </Col>
      </Row>
      <Row className={style.content}>
        <Col>
          <span>
            {tempMin}°
            <BsArrowDownUp />
            {tempMax}°
          </span>
        </Col>
      </Row>
      <div className={style.details}>
        <Row>
          <Col>
            <span>
              <WiCloudy />
              {cloud} %
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>
              <WiStrongWind />
              {wind} Km/h
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>
              <WiHumidity />
              {humidity} %
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ForecastDay;
