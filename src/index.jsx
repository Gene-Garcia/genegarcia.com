import React from "react";
import ReactDOM from "react-dom";

// tailwind css
import "./index.css";

// App
import App from "./screens/App/index";

ReactDOM.render(
  <div className="h-screen">
    <App />
  </div>,
  document.getElementById("root")
);
