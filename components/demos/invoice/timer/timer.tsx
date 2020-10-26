import React, { useEffect, useState } from "react";
import classes from "./timer.module.scss";

const InvoiceTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(900);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;
  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return (
    <div className={classes.timer}>
      <img
        className={classes.timer__icon}
        src="/icons/invoice-timer.svg"
        alt="Invoice Timer"
      />
      Invoice expires in {`${minutes}:${seconds.toString().padStart(2, "0")}`}
    </div>
  );
};

export default InvoiceTimer;
