import type { NextPage } from "next";
import { FormEvent, useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import styles from "../styles/Form.module.css";

const Form: NextPage<{
  handleSubmit: (long: string, lat: string) => void;
}> = (props) => {
  // const longRef = useRef<HTMLInputElement | null>(null);
  // const latRef = useRef<HTMLInputElement | null>(null);
  const [inputLongitude, setInputLongitude] = useState("");
  const [inputLatitude, setInputLatitude] = useState("");

  const performSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleSubmit(inputLongitude, inputLatitude);
  };

  return (
    <form onSubmit={(e) => performSubmit(e)} className={styles.container}>
      {/* <label htmlFor="longitud">Longitud:</label> */}
      {/* <br /> */}
      {/* <input
          type="text"
          id="longitud"
          name="longitud"
          placeholder="longitud"
          onChange={(e) => setInputLongitude(e.target.value)}
        /> */}
      <TextField
        id="longitud"
        label="Longitude"
        onChange={(e) => setInputLongitude(e.target.value)}
        className={styles.inputField}
      />
      <TextField
        id="latitud"
        label="Latitude"
        onChange={(e) => setInputLatitude(e.target.value)}
        className={styles.inputField}
      />
      {/* <br />
        <label htmlFor="latitud">Latitud:</label>
        <br />
        <input
          type="text"
          id="latitud"
          name="latitud"
          placeholder="latitud"
          onChange={(e) => setInputLatitude(e.target.value)}
          // ref={latRef}
        /> */}
      {/* <br /> */}
      {/* <button type="submit">Visa Väderprognos</button> */}
      <Button variant="outlined" type="submit">
        Show
      </Button>
    </form>
  );
};

export default Form;
