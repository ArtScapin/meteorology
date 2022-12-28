import { useState } from "react";
import weatherApi from "../../services/Api";

function Content() {
  const [country, setCountry] = useState();
  weatherApi
    .get(
      "current.json?key=6b19b92eebd245cfb66172337222812&q=48.8567,2.3508lang=pt"
    )
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error(err);
    });

  return <h1>{country}</h1>;
}

export default Content;
