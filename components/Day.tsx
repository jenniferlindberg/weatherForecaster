import { NextPage } from "next";
import React, { useState } from "react";
import DayDetail from "./DayDetail";

import stylesDayOverview from "../styles/DayOverview.module.css";
import stylesDay from "../styles/Day.module.css";

import { CurrDateType } from "./DayOverview";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";

const MID_DAY_TIME = "19:00:00";

const Day: NextPage<{
  currentDate: string;
  structuredData: CurrDateType;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const midDayTemperature =
    props.structuredData[props.currentDate]?.[MID_DAY_TIME];

  const allDayTimes = Object.keys(props.structuredData[props.currentDate]);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  console.log({ allDayTimes });

  return (
    <React.Fragment>
      <div
        className={stylesDayOverview.day}
        onClick={handleClick}
        id={props.currentDate.slice(0, 10)}
      >
        <div className={stylesDayOverview.dateColumn}>{props.currentDate}</div>
        {midDayTemperature ? (
          <div className={stylesDayOverview.tempColumn}>
            {midDayTemperature}
          </div>
        ) : (
          <div className={stylesDayOverview.tempColumn}>
            No data for {MID_DAY_TIME}
          </div>
        )}
      </div>
      {isOpen ? (
        <div className={stylesDay.mainContainer}>
          <div className={`${stylesDay.headerContainer}`}>
            <div className={stylesDay.dateColumn}>Tid</div>
            <div className={stylesDay.tempColumn}>Temperatur</div>
          </div>
          <div className={stylesDay.container}>
            <Box sx={{ mt: 1 }}>
              <List className={stylesDayOverview.list}>
                <TransitionGroup>
                  {allDayTimes.map((time) => {
                    console.log("the time...", time);
                    return (
                      <Collapse
                        key={time}
                        className={stylesDayOverview.collapse}
                      >
                        <DayDetail
                          time={time}
                          temperature={
                            props.structuredData[props.currentDate]?.[time]
                          }
                        />
                      </Collapse>
                    );
                  })}
                </TransitionGroup>
              </List>
            </Box>
          </div>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Day;
