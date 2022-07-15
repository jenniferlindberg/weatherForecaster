import React, { useEffect } from "react";
import type { NextPage } from "next";

const ResultPresenter: NextPage = (props) => {
  useEffect(() => {
    getWeatherData("18", "59");
  }, []);

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
        validTime: "2022-07-14T22:00:00Z",
      },
    ],
  };

  const getWeatherData = async (longitude: string, latitude: string) => {
    /* const data = await fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${longitude}/lat/${latitude}/data.json`
    );

    const weather = await data.json(); */

    let cleanData: { [key: string]: number } = {};

    DUMMY_WEATHER.timeSeries.forEach((timeData) => {
      let weatherData = timeData.parameters.filter((parameter) => {
        cleanData = { ...cleanData, [timeData.validTime]: parameter.values[0] };
        return parameter.name === "t";
      });
    });
  };

  return <div>ResultPresenter</div>;
};

export default ResultPresenter;
