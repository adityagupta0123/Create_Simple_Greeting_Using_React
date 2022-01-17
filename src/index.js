import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const CurTime = new Date(2022,1,17,4).getHours();
let greeting = "";
let cssStyle = {};

if (CurTime >= 1 && CurTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (CurTime >= 12 && CurTime < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "#ff7b00";
} else {
  greeting = " Good Night";
  cssStyle.color = "purple";
}

ReactDom.render(
  <>
  <div>
  <h1> Hello Sir, <span style = {cssStyle}> {greeting} </span> </h1>
  </div>

  </>,
  document.getElementById("root")
);