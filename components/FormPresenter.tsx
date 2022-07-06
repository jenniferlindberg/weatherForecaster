import type { NextPage } from "next";
import { useState } from "react";
import Form from "./Form";

const FormPresenter: NextPage = () => {
  const [coordinates, setCoordinates] = useState<String[]>([]);

  const handleSubmit = (inputLongitude: string, inputLatitude: string) => {
    // TODO: insert error handling
    setCoordinates([inputLongitude, inputLatitude]);
  };

  return <Form handleSubmit={handleSubmit} />;
};

export default FormPresenter;
