import type { NextPage } from "next";
import { useState } from "react";
import Form from "./Form";

const FormPresenter: NextPage<{
  handleCoordinates: (long: string, lat: string) => void;
}> = (props) => {
  return <Form handleSubmit={props.handleCoordinates} />;
};

export default FormPresenter;
