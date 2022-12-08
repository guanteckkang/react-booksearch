import React from "react";
import { useState, useEffect } from "react";

export default function Clock() {
  // useState save the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
  // useEffect will activated after function rendered.
  useEffect(() => {
    // setInterval will call date function which will update the setTime each time beaing called
    const interval = setInterval(date, 1000);
    // this function update the current time
    function date() {
      setTime(new Date().toLocaleTimeString("en-GB"));
      console.log("Time: " + time);
    }
    return () => {
      // this clearinterval will clear interval that call setInterval
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
