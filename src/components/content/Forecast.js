import { Row, Col } from "react-bootstrap";
import Section from "../layout/Section";
import ForecastDay from "./ForecastDay";
import style from "./Forecast.module.css";

function Forecast() {
  return (
    <Section>
      <p className={style.title}>Previsão para os próximos dias</p>
      <Row>
        <Col>
          <ForecastDay
            day={"30/12/2022"}
            tempMin={14}
            tempMax={25}
            humidity={30}
            wind={26}
            cloud={7}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ForecastDay
            day={"30/12/2022"}
            tempMin={14}
            tempMax={25}
            humidity={30}
            wind={26}
            cloud={7}
          />
        </Col>
        <Col>
          <ForecastDay
            day={"30/12/2022"}
            tempMin={14}
            tempMax={25}
            humidity={30}
            wind={26}
            cloud={7}
          />
        </Col>
        <Col>
          <ForecastDay
            day={"30/12/2022"}
            tempMin={14}
            tempMax={25}
            humidity={30}
            wind={26}
            cloud={7}
          />
        </Col>
        <Col>
          <ForecastDay
            day={"30/12/2022"}
            tempMin={14}
            tempMax={25}
            humidity={30}
            wind={26}
            cloud={7}
          />
        </Col>
        <Col>
          <ForecastDay
            day={"30/12/2022"}
            tempMin={14}
            tempMax={25}
            humidity={30}
            wind={26}
            cloud={7}
          />
        </Col>
      </Row>
    </Section>
  );
}

export default Forecast;
