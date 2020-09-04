import React from "react";
import classes from "./ButtonContainer.module.css";
import { Button } from "../../components/UI/Button/Button";
import { motion } from "framer-motion";

const buttonContainer = ({ clicked }) => {
  return (
    <div>
      <div className={classes.ButtonContainer}>
        <motion.div
          transition={{ duration: 0.4 }}
          whileHover={{ x: [0, 10, -10, 7, -7, 0] }}
        >
          <Button onClick={clicked}>Show Register Form</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default buttonContainer;
