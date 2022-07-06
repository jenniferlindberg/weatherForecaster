import React, { useEffect } from "react";
import type { NextPage } from "next";

const ResultPresenter: NextPage = (props) => {
  useEffect(() => {
    getWeatherData("5", "10");
  }, []);

  const getWeatherData = async (longitude: string, latitude: string) => {
    const data = await fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json`
    );

    const weather = await data.json();

    console.log(weather);
  };

  return <div>ResultPresenter</div>;
};

export default ResultPresenter;
