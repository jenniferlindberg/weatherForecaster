import { NextPage } from "next";
import React from "react";

const DayDetail: NextPage<{
  handleDetails: (weatherData: {}, currentDate: string) => void;
}> = (props) => <div>dayDetail</div>;

export default DayDetail;
