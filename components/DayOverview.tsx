import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/DayOverview.module.css";
import type { NextPage } from "next";
import { WeatherType } from "./ResultPresenter";

import Day from "./Day";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";
import { ConstructionOutlined } from "@mui/icons-material";

/* 
    date: {time1: temp1,
           time2: temp2,
           time3: temp3} 
*/

export type CurrDateType = { [key: string]: { [key: string]: number } };

const renderDateDetails = (date: String, temperature: number) => {
  return (
    <ListItem>
      <ListItemText primary={`${date.slice(11, 19)} ${temperature}`} />
    </ListItem>
  );
};

const DayOverview: NextPage<{
  weatherData: WeatherType;
}> = (props) => {
  const [structuredData, setStructuredData] = useState<CurrDateType>();
  const [dates, setDates] = useState<string[]>([]);

  /* Structure data on render. */
  useEffect(() => {
    const data = structureData();
    setStructuredData(data);
  }, [props.weatherData]);

  const structureData = () => {
    const timeStamps = Object.keys(props.weatherData);
    let strucData: CurrDateType = {};

    timeStamps.forEach((timeStamp) => {
      const prevData = strucData;
      const date = timeStamp.slice(0, 10);
      const time = timeStamp.slice(11, 19);
      const temperature = props.weatherData[timeStamp];

      if (!strucData[date]) {
        strucData = {
          ...prevData,
          [date]: { [time]: temperature },
        };
      } else {
        const prevTimesObj = strucData[date];
        const newTimesObj = {
          ...prevTimesObj,
          [time]: temperature,
        };
        strucData = { ...prevData, [date]: newTimesObj };
      }
    });
    return strucData;
  };

  useEffect(() => {
    const dateTimes = Object.keys(props.weatherData);
    const allDates = dateTimes.map((date) => {
      return date.slice(0, 10);
    });
    const uniqueDates = allDates.filter((date, index) => {
      return allDates.indexOf(date) === index;
    });
    setDates(uniqueDates);
  }, [props.weatherData]);

  /* Iterera över alla datum, och visa ett Day-element för respektive. */
  return (
    <div className={styles.container}>
      {dates.length !== 0 && structuredData ? (
        dates.map((date) => (
          <Day key={date} structuredData={structuredData} currentDate={date} />
        ))
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};

export default DayOverview;
