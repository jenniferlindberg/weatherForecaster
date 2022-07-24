import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/DayOverview.module.css";
import type { NextPage } from "next";
import { WeatherType } from "./ResultPresenter";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";

const DayOverview: NextPage<{
  weatherData: WeatherType;
}> = (props) => {
  const [midDayData, setMidDayData] = useState<
    Array<{ dateTime: string; temperature: number }>
  >([]);

  const [detailsOpen, setDetailsOpen] = useState<string[]>([]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("curr target", e.currentTarget.id);
    setDetailsOpen([...detailsOpen, e.currentTarget.id]);
  };

  useEffect(() => {
    const keys = Object.keys(props.weatherData);
    const midDayKeys = keys.filter((el) => el.slice(11, 13) === "19");

    setMidDayData(
      midDayKeys.map((el) => ({
        dateTime: el,
        temperature: props.weatherData[el],
      }))
    );
  }, [props.weatherData]);

  return (
    <div>
      {midDayData.map((el) => (
        <div key={el.dateTime}>
          <div
            className={styles.day}
            key={el.dateTime}
            onClick={handleClick}
            id={el.dateTime}
          >
            <div className={styles.dateColumn}>{el.dateTime.slice(0, 10)}</div>
            <div className={styles.tempColumn}>{el.temperature}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayOverview;
