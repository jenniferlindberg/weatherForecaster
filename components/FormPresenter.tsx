import type { NextPage } from "next";
import Form from "./Form";

const FormPresenter: NextPage<{
  handleCoordinates: (long: string, lat: string) => void;
}> = (props) => <Form handleSubmit={props.handleCoordinates} />;

export default FormPresenter;
