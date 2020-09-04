import React from "react";
import classes from "./InputContainer.module.css";

const inputContainer = ({ children }) => {
  return <div className={classes.InputContainer}>{children}</div>;
};

export default inputContainer;
