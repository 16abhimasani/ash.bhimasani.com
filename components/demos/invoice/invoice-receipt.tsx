import React from "react";
import classes from "./invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "./details-bar/details-bar";
import InvoiceSuperToast from "./super-toast/super-toast";

import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const InvoiceReceiptDemo: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div>
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar timestamp />
        {type === "paid" && (
          <motion.div
            className={cx({
              status: true,
              status__green: true,
            })}
          >
            <img
              className={classes.status__icon}
              src="/icons/status-paid.svg"
            />
            Success
          </motion.div>
        )}
        {type === "delayed" && (
          <motion.div
            className={cx({
              status: true,
              status__orange: true,
            })}
          >
            <img
              className={classes.status__icon}
              src="/icons/status-confirming.svg"
            />
            Payment Delayed
          </motion.div>
        )}
        {type === "overpaid" && (
          <motion.div
            className={cx({
              status: true,
              status__blue: true,
            })}
          >
            <img
              className={classes.status__icon}
              src="/icons/status-refund.svg"
            />
            Refund Available
          </motion.div>
        )}
        {type === "underpaid" && (
          <motion.div
            className={cx({
              status: true,
              status__red: true,
            })}
          >
            <img
              className={classes.status__icon}
              src="/icons/status-declined.svg"
            />
            Payment Declined
          </motion.div>
        )}
        <motion.div className={classes.price}>$135.00</motion.div>
        <div className={classes.details}>
          <div className={classes.details__row}>
            <div className={classes.details__row__left}>Exchange Rate</div>
            <div className={classes.details__row__right}>16,410.28 USD</div>
          </div>
          <div className={classes.details__row}>
            <div className={classes.details__row__left}>Network Cost</div>
            <div className={classes.details__row__right}>0.000029 BTC</div>
          </div>
          <div className={classes.details__row}>
            <div className={classes.details__row__left}>Total Due</div>
            <div className={classes.details__row__right}>0.008226 BTC</div>
          </div>
          <div className={classes.details__row}>
            <div className={classes.details__row__left}>Amount Paid</div>
            <div
              className={classes.details__row__right}
              style={{ fontWeight: 600, color: "#4f6ef7" }}
            >
              {type === "paid" && <> 0.008226 BTC</>}
              {type === "delayed" && <> 0.008226 BTC</>}
              {type === "overpaid" && <> 0.009973 BTC</>}
              {type === "underpaid" && <> 0.008001 BTC</>}
            </div>
          </div>
        </div>
      </motion.div>
      <div style={{ position: "relative", marginTop: 26 }}>
        {type === "paid" && (
          <InvoiceSuperToast
            open={true}
            title="We'd love to hear your feedback!"
            caption="Tell us how we're doing or if you have any suggestions or feature requests."
            type="feedback"
            lightMode
          />
        )}
        {type === "delayed" && (
          <InvoiceSuperToast
            open={true}
            title="Low Fee Warning!"
            caption="This payment was sent with a low transaction fee and may take longer than normal to confirm."
            type="timer"
            buttons={[{ text: "Learn More" }]}
          />
        )}
        {type === "overpaid" && (
          <InvoiceSuperToast
            open={true}
            title="Here’s your change"
            caption="A refund of 0.001747 BTC is available for your overpayment."
            type="refund"
            buttons={[{ text: "Enter Address" }]}
          />
        )}
        {type === "underpaid" && (
          <InvoiceSuperToast
            open={true}
            title="Here’s a full refund"
            caption="A refund of 0.008001 BTC is available for your underpayment."
            type="refund"
            buttons={[{ text: "Enter Address" }]}
          />
        )}
      </div>
    </div>
  );
};

export default InvoiceReceiptDemo;
