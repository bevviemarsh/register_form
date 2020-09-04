import React from "react";
import classes from "./FormContainer.module.css";
import RegisterForm from "../../components/UI/RegisterForm/RegisterForm";
import { motion, AnimatePresence } from "framer-motion";

const formContainer = ({ displayed, clicked }) => {
  return (
    <div>
      <AnimatePresence>
        {displayed ? (
          <motion.div
            className={classes.FormContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <RegisterForm clicked={clicked} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default formContainer;
