import React from "react";
import classes from "./LabelContainer.module.css";

const labelContainer = ({ children }) => {
  return <div className={classes.LabelContainer}>{children}</div>;
};

export default labelContainer;
