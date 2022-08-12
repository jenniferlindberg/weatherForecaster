import type { NextPage } from "next";
import Form from "./Form";
import styles from "../styles/FormPresenter.module.css";

const FormPresenter: NextPage<{
  handleCoordinates: (long: string, lat: string) => void;
}> = (props) => (
  <div className={styles.container}>
    <Form handleSubmit={props.handleCoordinates} />
  </div>
);

export default FormPresenter;
