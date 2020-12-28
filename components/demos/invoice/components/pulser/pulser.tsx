import React from "react";
import classes from "./pulser.module.scss";
import classNames from "classnames/bind";
import { hexToRGB } from "../../../../../utils/utils";
const cx = classNames.bind(classes);

const InvoicePulser: React.FC<{ icon: string; theme: string }> = ({
  icon,
  theme,
}) => {
  const color = {
    backgroundColor: `rgba(${hexToRGB(theme)}, 0.02)`,
    boxShadow: `inset 0 0 12px 0 rgba(${hexToRGB(theme)}, 0.16)`,
  };
  return (
    <div className={classes.pulser}>
      <img className={classes.pulser__icon} src={icon} />
      <div
        className={cx({
          pulser__rings: true,
          pulser__rings__0: true,
        })}
        style={color}
      ></div>
      <div
        className={cx({
          pulser__rings: true,
          pulser__rings__1: true,
        })}
        style={color}
      ></div>
      <div
        className={cx({
          pulser__rings: true,
          pulser__rings__2: true,
        })}
        style={color}
      ></div>
      <div
        className={cx({
          pulser__rings: true,
          pulser__rings__3: true,
        })}
        style={color}
      ></div>
      <div
        className={cx({
          pulser__rings: true,
          pulser__rings__4: true,
        })}
        style={color}
      ></div>
      <div
        className={cx({
          pulser__rings: true,
          pulser__rings__5: true,
        })}
        style={color}
      ></div>
    </div>
  );
};

export default InvoicePulser;
