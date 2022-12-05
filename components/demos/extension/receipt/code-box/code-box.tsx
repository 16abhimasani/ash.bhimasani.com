import classNames from "classnames/bind";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import copyUtil from "../../../../../utils/copy-to-clipboard";
import { wait } from "../../../../../utils/utils";
import classes from "./code-box.module.scss";

const cx = classNames.bind(classes);

const animateLabels = {
  base: {
    opacity: 1,
    y: 0,
  },
  delta: {
    opacity: 0,
    y: 8,
  },
};

const ExtensionCodeBox: React.FC<{ code: string; label: string }> = ({
  code,
  label,
}) => {
  const mountedRef = useRef(true);
  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);
  const startCopying = useCallback(async () => {
    copyUtil(code);
    if (copied) return;
    setCopied(true);
    await wait(1500);
    if (mountedRef.current) setCopied(false);
  }, [copied, code, label]);
  const changeHovering = useCallback(
    (val: boolean) => (): void => {
      setHovering(val);
    },
    []
  );
  useEffect(
    () => (): void => {
      mountedRef.current = false;
    },
    []
  );
  return (
    <div className={classes.box__wrapper}>
      <motion.div
        className={classes.box}
        whileHover={{
          scale: 0.98,
          transition: { type: "spring", damping: 12 },
        }}
        whileTap={{ scale: 1.02 }}
        onHoverStart={changeHovering(true)}
        onHoverEnd={changeHovering(false)}
        onTapStart={startCopying}
      >
        <motion.div
          className={classes.box__value}
          animate={{ color: copied ? "#4f6ef7" : "#000000" }}
        >
          {code}
        </motion.div>
        <div className={classes.box__label__wrapper}>
          <motion.div
            className={classes.box__label}
            animate={!copied && !hovering ? "base" : "delta"}
            variants={animateLabels}
          >
            {label}
          </motion.div>
          <motion.div
            className={cx({
              box__label: true,
              box__label__action: true,
            })}
            animate={!copied && hovering ? "base" : "delta"}
            initial={false}
            variants={animateLabels}
          >
            Copy to Clipboard
          </motion.div>
          <motion.div
            className={cx({
              box__label: true,
              box__label__action: true,
            })}
            animate={copied ? "base" : "delta"}
            initial={false}
            variants={animateLabels}
          >
            Copied to Clipboard!
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExtensionCodeBox;
