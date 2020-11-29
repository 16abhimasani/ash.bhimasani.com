import React, { Dispatch, SetStateAction } from "react";
import classes from "./overlay.module.scss";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence exitBeforeEnter>
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
