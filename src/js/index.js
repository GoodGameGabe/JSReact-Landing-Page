//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.jsx";
import { Card } from "./component/home.jsx";
import { Toolbar } from "./component/home.jsx";
import { Footer } from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
