import React from "react";
import ReactDOM from "react-dom";
import { FirstComponent } from "./firstComponent";

console.log(`Api base: ${process.env.API_BASE}`);

ReactDOM.render(
  <div>
    <FirstComponent />
  </div>,
  document.getElementById("root")
);
