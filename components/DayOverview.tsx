import React from "react";
import styles from "../styles/DayOverview.module.css";

const DayOverview = () => (
  <div className={styles.container}>
    <div className={styles.day}>
      <div className={styles.dateColumn}>Date</div>
      <div className={styles.tempColumn}>Temp</div>
    </div>
  </div>
);

export default DayOverview;
