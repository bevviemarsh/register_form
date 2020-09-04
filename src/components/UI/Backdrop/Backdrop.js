import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = ({ clicked, displayed }) => {
  return (
    <div>
      {displayed ? (
        <div className={classes.Backdrop} onClick={clicked}></div>
      ) : null}
    </div>
  );
};

export default backdrop;
