import React from "react";
import classes from "./back-button.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const BackButton: React.FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => (
  <AnimatePresence>
    {show && (
      <motion.button
        key="BackButton"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
        exit={{ opacity: 0, x: -600 }}
        className={classes.back_button}
        type="button"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="9"
          viewBox="0 0 6 9"
          className={classes.back_button__arrow}
        >
          <polyline
            fill="none"
            stroke="#9BA3AE"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            points=".088 5.732 3.313 8.778 .088 11.824"
            transform="rotate(180 2.2 6.778)"
          />
        </svg>
        <span className={classes.back_button__text}>Back</span>
      </motion.button>
    )}
  </AnimatePresence>
);

export default BackButton;
