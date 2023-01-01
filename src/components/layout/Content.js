import { useState } from "react";
import { Container } from "react-bootstrap";
import Forecast from "../content/Forecast";
import Today from "../content/Today";
import weatherApi from "../../services/Api";
import style from "./Content.module.css";

function Content() {
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();
  const [coords, setCoords] = useState();

  if (!coords) {
    navigator.geolocation.watchPosition((position) =>
      setCoords(position.coords)
    );
  } else {
    if (!current || !forecast || !location) {
      weatherApi
        .get(
          `forecast.json?key=a0e5965dfa524519a4f182402223112&q=${coords.latitude},${coords.longitude}&days=3`
        )
        .then((res) => {
          setCurrent(res.data.current);
          setForecast(res.data.forecast.forecastday);
          setLocation(res.data.location);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <Container className={style.container}>
      {current && location && <Today current={current} location={location} />}
      {forecast && <Forecast forecast={forecast} />}
    </Container>
  );
}

export default Content;
