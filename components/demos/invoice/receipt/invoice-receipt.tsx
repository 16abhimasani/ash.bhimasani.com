import { motion } from "framer-motion";
import React, { useState } from "react";
import invoiceClasses from "../invoice.module.scss";
import classes from "./invoice-receipt.module.scss";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceSuperToast from "../components/super-toast/super-toast";

import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const InvoiceReceiptDemo: React.FC<{ type: string }> = ({ type }) => {
  const [pulse, togglePulse] = useState(true);
  return (
    <div>
      <motion.div
        className={invoiceClasses.invoice}
        onClick={(): void => togglePulse(!pulse)}
        style={
          type === "underpaid" || type === "overpaid" || type === "refund"
            ? { cursor: "pointer" }
            : {}
        }
      >
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
            Payment Detected
          </motion.div>
        )}
        {(type === "overpaid" || type === "refund") && (
          <motion.div
            className={cx({
              status: true,
              status__blue: true,
            })}
          >
            <img
              className={cx({
                status__icon: true,
                status__blue__pulse: pulse,
              })}
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
              className={cx({
                status__icon: true,
                status__red__pulse: pulse,
              })}
              src="/icons/status-declined.svg"
            />
            Payment Declined
          </motion.div>
        )}
        {type === "processing" && (
          <motion.div
            className={cx({
              status: true,
              status__blue: true,
            })}
          >
            <img
              className={classes.status__icon}
              src="/icons/status-processing.svg"
            />
            Refund Processing
          </motion.div>
        )}
        <motion.div className={invoiceClasses.price}>$135.00</motion.div>
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
            <a
              className={classes.details__row__right}
              href="https://explorer.bitcoin.com/btc/tx/29a3efd3ef04f9153d47a990bd7b048a4b2d213daaa5fb8ed670fb85f13bdbcf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {type === "overpaid" && <> 0.009973 BTC</>}
              {type === "underpaid" && <> 0.008001 BTC</>}
              {(type === "paid" ||
                type === "processing" ||
                type === "refund" ||
                type === "delayed") && <> 0.008226 BTC</>}
            </a>
          </div>
          {(type === "processing" || type === "refund") && (
            <div className={classes.details__row}>
              <div className={classes.details__row__left}>Refund Due</div>
              <div
                className={classes.details__row__right}
                style={{ fontWeight: 600 }}
              >
                135.00 USD
              </div>
            </div>
          )}
          {type === "processing" && (
            <div className={classes.details__row}>
              <div className={classes.details__row__left}>Refund Address</div>
              <a
                className={classes.details__row__right}
                href="https://explorer.bitcoin.com/btc/address/1GnVjxpvak4CSJRAF6FFRHuboBA5uA8BTR"
                target="_blank"
                rel="noopener noreferrer"
              >
                1GnVjx…uA8BTR
              </a>
            </div>
          )}
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
        {type === "refund" && (
          <InvoiceSuperToast
            open={true}
            title="Here’s your refund"
            caption="A refund for 135.00 USD has been authorized on Dec 18 2020, 6:00 PM."
            type="refund"
            buttons={[{ text: "Enter Address" }]}
          />
        )}
        {type === "processing" && (
          <InvoiceSuperToast
            open={true}
            title="Address Saved!"
            caption="This refund will be sent to you within 1 to 2 business days."
            type="info"
          />
        )}
      </div>
    </div>
  );
};

export default InvoiceReceiptDemo;
