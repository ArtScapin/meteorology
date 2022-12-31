import { Row, Col } from "react-bootstrap";
import Section from "../layout/Section";
import ForecastDay from "./ForecastDay";
import style from "./Forecast.module.css";

function Forecast({ forecast }) {
  return (
    <Section>
      <p className={style.title}>Previsão para os próximos dias</p>
      <Row>
        {forecast.map((element, index) => (
          <Col key={index}>
            <ForecastDay
              day={element.date}
              tempMin={parseInt(element.day.mintemp_c)}
              tempMax={parseInt(element.day.maxtemp_c)}
              humidity={parseInt(element.day.avghumidity)}
              wind={parseInt(element.day.maxwind_kph)}
              rain={parseInt(element.day.daily_chance_of_rain)}
            />
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default Forecast;
