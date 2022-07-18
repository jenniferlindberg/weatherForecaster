import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

import styles from "../styles/ResultPresenter.module.css";

import DayOverview from "./DayOverview";

const DUMMY_WEATHER = {
  timeSeries: [
    {
      parameters: [{ name: "t", unit: "Cel", values: [-9] }],
      validTime: "2022-07-14T19:00:00Z",
    },
    {
      parameters: [{ name: "t", unit: "Cel", values: [15] }],
      validTime: "2022-07-14T20:00:00Z",
    },
    {
      parameters: [{ name: "t", unit: "Cel", values: [20] }],
      validTime: "2022-07-14T21:00:00Z",
    },
    {
      parameters: [{ name: "t", unit: "Cel", values: [8] }],
      validTime: "2022-07-15T19:00:00Z",
    },
  ],
};

const ResultPresenter: NextPage<{
  coordinates: String[];
}> = (props) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: number }>({});

  const getWeatherData = React.useCallback(
    async (longitude: String, latitude: String) => {
      /* const data = await fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`
    );

    const weather = await data.json(); */

      let cleanData: { [key: string]: number } = {};

      DUMMY_WEATHER.timeSeries.forEach((timeData) => {
        timeData.parameters.filter((parameter) => {
          cleanData = {
            ...cleanData,
            [timeData.validTime]: parameter.values[0],
          };
          return parameter.name === "t";
        });
      });

      setWeatherData(cleanData);

      return cleanData;
    },
    []
  );

  useEffect(() => {
    console.log({ weatherData });
  }, [weatherData]);

  useEffect(() => {
    getWeatherData(props.coordinates[0], props.coordinates[1]);
  }, [props, getWeatherData]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.dateColumn}>Datum</div>
        <div className={styles.tempColumn}>Temperatur</div>
      </div>
      <DayOverview weatherData={weatherData} />
    </div>
  );
};

export default ResultPresenter;
