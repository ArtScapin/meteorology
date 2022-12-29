import { Container } from "react-bootstrap";
import style from "./Section.module.css";

function Section(props) {
  return <Container className={style.container}>{props.children}</Container>;
}

export default Section;
