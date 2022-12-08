import React from "react";
import { useState } from "react";
import Clock from "./Clock";

export default function ClockControl() {
  const [click, setClick] = useState(true);
  let text;
  click ? (text = "Turn Off Clock") : (text = "Turn On Clock");
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "yellow",
        textAlign: "center",
        width: "700px",
        height: "300px",
        margin: "auto",
        marginTop: "20px",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h1>The current time is:</h1>
      <button
        style={{ padding: "15px", fontSize: "20px" }}
        onClick={() => {
          setClick(!click);
        }}
      >
        {text}
      </button>
      {click ? (
        <Clock />
      ) : (
        <>
          <h1>Clock is off</h1>
          {console.log("Toggle is off")}
        </>
      )}
    </div>
  );
}
