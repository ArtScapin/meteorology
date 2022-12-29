import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import weatherApi from "../../services/Api";
import {
  WiStrongWind as WindIcon,
  WiHumidity as HumidityIcon,
  WiCloud as CloudIcon,
} from "react-icons/wi";
import "./Today.css";

function Today() {
  const [location, setLocation] = useState();
  const [lastUpdate, setLastUpdate] = useState();
  const [temp, setTemp] = useState();
  const [image, setImage] = useState();
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [cloud, setCloud] = useState();

  weatherApi
    .get(
      "current.json?key=f32b279642ef4c0c8d2190545222812&q=-29.6983063,-53.8128811"
    )
    .then((response) => {
      setLocation(
        `${response.data?.location?.name} - ${response.data?.location?.region}`
      );
      setLastUpdate(response.data?.current?.last_updated);
      setTemp(response.data?.current?.temp_c);
      setImage(response.data?.current?.condition?.icon);
      setWind(response.data?.current?.wind_kph);
      setHumidity(response.data?.current?.humidity);
      setCloud(response.data?.current?.cloud);
      console.log(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <Container className="today">
      <Row>
        <Col className="todayLocation">{location}</Col>
      </Row>
      <Row className="todayTemp">
        <Col>
          {temp}°
          <Image className="todayImage" srcSet={image} />
        </Col>
      </Row>
      <Row>
        <Col className="todayIcon">
          <WindIcon />
          {wind} KM/h
        </Col>
      </Row>
      <Row>
        <Col className="todayIcon">
          <HumidityIcon />
          {humidity} %
        </Col>
      </Row>
      <Row>
        <Col className="todayIcon">
          <CloudIcon />
          {cloud} %
        </Col>
      </Row>

      <p className="todayLastUpdate">Last update: {lastUpdate}</p>
    </Container>
  );
}

export default Today;
