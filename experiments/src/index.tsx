import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { App } from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
import.meta.hot?.accept();
