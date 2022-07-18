import React, { useEffect, useState } from "react";
import styles from "../styles/DayOverview.module.css";
import type { NextPage } from "next";

const DayOverview: NextPage<{
  weatherData: {};
}> = (props) => {
  const [midDayData, setMidDayData] = useState([]);

  useEffect(() => {
    const keys = Object.keys(props.weatherData);
    const midDayKeys = keys.filter((el) => el.slice(11, 13) === "19");
    let cleanData: {}[] = [];

    midDayKeys.forEach((el) => {
      console.log(props.weatherData[el]);
      cleanData = [
        ...cleanData,
        { dateTime: el, temperature: props.weatherData[el] },
      ];
    });

    console.log({ cleanData });

    setMidDayData(cleanData);
  }, [props.weatherData]);

  return (
    <div className={styles.container}>
      {midDayData.map((el) => (
        <div className={styles.day} key={el.dateTime}>
          <div className={styles.dateColumn}>{el.dateTime.slice(0, 10)}</div>
          <div className={styles.tempColumn}>{el.temperature}</div>
        </div>
      ))}
    </div>
  );
};

export default DayOverview;
