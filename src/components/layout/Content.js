import { Container } from "react-bootstrap";
import Forecast from "../content/Forecast";
import Today from "../content/Today";

function Content() {
  return (
    <Container>
      <Today
        location={"Santa Maria"}
        temp={25}
        cloud={7}
        humidity={30}
        wind={26}
        updateAt={"29-12-2022 16:35"}
      />
      <Forecast />
    </Container>
  );
}

export default Content;
