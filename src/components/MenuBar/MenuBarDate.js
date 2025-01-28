import React, { useEffect, useState } from "react";

function MenuBarDate() {
  const [date, setDate] = useState(getCurrentDateTime());
  function getCurrentDateTime() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date();
    var day = days[date.getDay()];
    var dateNum = date.getDate();
    var month = months[date.getMonth()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return (
      day +
      " " +
      dateNum +
      " " +
      month +
      " " +
      hours +
      ":" +
      minutes +
      " " +
      ampm
    );
  }

  useEffect(() => {
    const intervalID = setInterval(() => setDate(getCurrentDateTime()), 20000);
    return () => clearInterval(intervalID);
  }, []);
  return <div>{date}</div>;
}

export default MenuBarDate;
