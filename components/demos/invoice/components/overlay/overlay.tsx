import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import classes from "./overlay.module.scss";

const animateOverlay = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const InvoiceOverlay: React.FC<{
  open: boolean;
  click: Dispatch<SetStateAction<boolean>>;
}> = ({ open, click }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className={classes.overlay}
          key="overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animateOverlay}
          onClick={(): void => click(false)}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvoiceOverlay;
