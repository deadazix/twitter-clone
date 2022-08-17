import classes from "./Home.module.css";
import React from "react";
import Homebar from "../components/homebar/Homebar";
import Toolbar from "../components/toolbar/Toolbar";
import { Route, useRouteMatch } from "react-router-dom";
import Explorebar from "./Explorebar";
import Notificationbar from "./Notificationbar";
const Application = () => {
  const match = useRouteMatch();

  return (
    <div className={classes.home}>
      <Toolbar />
      <Route path={`${match.path}/home`}>
        <Homebar />
      </Route>{" "}
      <Route path={`${match.path}/explore`}>
        <Explorebar />
      </Route>{" "}
      <Route path={`${match.path}/notification`}>
        <Notificationbar />
      </Route>
    </div>
  );
};

export default Application;
