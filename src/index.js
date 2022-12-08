import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Times());
root.render(
  <React.StrictMode>
    <App />
    {/* <h1>Hi. My name is Guan Teck Kang</h1>
    <h2>Nice To Meet You!</h2> */}
  </React.StrictMode>
);

// function Times() {
//   const dates = new Date().toDateString();
//   const times = new Date().toLocaleTimeString();
//   let time;
//   let hours = new Date().getHours();
//   hours < 12
//     ? (time = "Morning")
//     : hours >= 12 && hours < 17
//     ? (time = "Afternoon")
//     : (time = "Evening");
//   const current = (
//     <div>
//       <h1>Good {time},</h1>
//       <h2>Today is:</h2>
//       <h3>{dates}</h3>
//       <h2>The current time is:</h2>
//       <h3>{times}</h3>
//     </div>
//   );
//   root.render(current);
// }
// setInterval(Times, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
