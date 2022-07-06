import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Form: NextPage<{
  handleSubmit: (long: string, lat: string) => void;
}> = (props) => {
  const [inputLongitude, setInputLongitude] = useState("");
  const [inputLatitude, setInputLatitude] = useState("");

  const performSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleSubmit(inputLongitude, inputLatitude);
  };

  return (
    <div>
      <form onSubmit={(e) => performSubmit(e)}>
        <label htmlFor="longitud">Longitud:</label>
        <br />
        <input
          type="text"
          id="longitud"
          name="longitud"
          placeholder="longitud"
          onChange={(e) => setInputLongitude(e.target.value)}
        />
        <br />
        <label htmlFor="latitud">Latitud:</label>
        <br />
        <input
          type="text"
          id="latitud"
          name="latitud"
          placeholder="latitud"
          onChange={(e) => setInputLatitude(e.target.value)}
        />
        <br />
        <button type="submit">Visa Väderprognos</button>
      </form>
    </div>
  );
};

export default Form;
