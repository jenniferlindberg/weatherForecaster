import { NextPage } from "next";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import styles from "../styles/DayDetail.module.css";

const DayDetail: NextPage<{
  time: string;
  temperature: number;
}> = (props) => {
  return (
    <ListItem className={styles.container}>
      <React.Fragment>
        <div className={styles.dateColumn}>{props.time}</div>
        <div className={styles.tempColumn}>{props.temperature}</div>
      </React.Fragment>
      {/* <ListItemText primary={`${props.time}, ${props.temperature}`} /> */}
    </ListItem>
  );
};

export default DayDetail;
