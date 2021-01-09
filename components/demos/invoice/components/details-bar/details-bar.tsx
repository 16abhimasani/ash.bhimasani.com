import React, { useState, useRef, useCallback } from "react";
import classes from "./details-bar.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);
import copyUtil from "../../../../../utils/copy-to-clipboard";
import BitpayLogo from "../../../extension/bp-logo/bp-logo";

const detailsTransition = {
  transition: {
    type: "spring",
    bounce: 0.01,
  },
};

const animateDetails = {
  detailsClosed: {
    height: 0,
    ...detailsTransition,
  },
  detailsOpen: (height: number) => ({
    height,
    ...detailsTransition,
  }),
  chevronOpen: {
    rotate: -180,
    y: 0.5,
    originX: "center",
  },
  chevronClosed: {
    rotate: 0,
    y: 0.5,
    originX: "center",
  },
};

const InvoiceDetailsBar: React.FC<{
  total?: string;
  rate?: string;
  due?: string;
  timestamp?: boolean;
  refund?: boolean;
  networkCost?: boolean;
}> = ({ total = "135.00 USD", rate, due, timestamp, refund, networkCost }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const details = useRef<HTMLDivElement>(null);
  const getHeight = useCallback((): number => {
    if (!details.current) return 0;
    return details.current.clientHeight;
  }, [details]);
  const currentDate = new Date().toLocaleString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <motion.div className={classes.bar}>
        <div className={classes.bp_logo}>
          <BitpayLogo solo={false} payMode={false} />
        </div>
        {timestamp ? (
          <motion.div
            className={cx({
              bubble: true,
              bubble__time: true,
            })}
            onClick={(): void => copyUtil(currentDate)}
          >
            {currentDate}
          </motion.div>
        ) : (
          <motion.div
            className={cx({
              bubble: true,
              bubble__details: true,
            })}
            onClick={(): void => setDetailsOpen(!detailsOpen)}
            whileTap={{ scale: 0.98 }}
          >
            <div style={{ marginRight: 8 }}>View details</div>
            <motion.svg
              animate={detailsOpen ? "chevronOpen" : "chevronClosed"}
              variants={animateDetails}
              initial="chevronClosed"
              width="8px"
              height="6px"
              viewBox="0 0 8 6"
              version="1.1"
            >
              <g
                id="Symbols"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Details-Bar---Collapsed"
                  transform="translate(-311.000000, -26.000000)"
                >
                  <g
                    id="view-details"
                    transform="translate(221.000000, 16.000000)"
                  >
                    <rect
                      id="bubble"
                      fill="#F5F5F7"
                      x="0"
                      y="0"
                      width="111"
                      height="25"
                      rx="12.5"
                    ></rect>
                    <g
                      id="small-triangle-down"
                      transform="translate(90.000000, 10.500000)"
                      fill="#4F6EF7"
                      fillRule="nonzero"
                    >
                      <path
                        d="M7.33320958,0 L0.666790422,0 C0.424799407,0 0.201474365,0.0985 0.0834787458,0.2575 C-0.0338502313,0.4165 -0.0271838122,0.611 0.101478078,0.765 L3.43468766,4.765 C3.55668313,4.911 3.77000854,5 4,5 C4.22999146,5 4.44331687,4.911 4.56531234,4.765 L7.89852192,0.765 C8.02718381,0.611 8.03385023,0.4165 7.91652125,0.2575 C7.79852564,0.0985 7.57520059,0 7.33320958,0 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </motion.svg>
          </motion.div>
        )}
      </motion.div>
      {!timestamp && (
        <motion.div
          animate={detailsOpen ? "detailsOpen" : "detailsClosed"}
          variants={animateDetails}
          custom={getHeight()}
          initial="detailsClosed"
          style={{ overflow: "hidden" }}
        >
          <div className={classes.details} ref={details}>
            <div className={classes.details__row}>
              <div className={classes.details__row__left}>Total Price</div>
              <div className={classes.details__row__right}>{total}</div>
            </div>
            {rate && (
              <div className={classes.details__row}>
                <div className={classes.details__row__left}>Exchange Rate</div>
                <div className={classes.details__row__right}>{rate}</div>
              </div>
            )}
            {networkCost && (
              <div className={classes.details__row}>
                <div className={classes.details__row__left}>
                  Network Cost
                  <img
                    style={{ marginLeft: 6 }}
                    width="12px"
                    src="/icons/question-icon.svg"
                  />
                </div>
                <div className={classes.details__row__right}>0.000172 BTC</div>
              </div>
            )}
            {due && (
              <div className={classes.details__row}>
                <div className={classes.details__row__left}>Amount Due</div>
                <div
                  className={classes.details__row__right}
                  style={{ fontWeight: refund ? 500 : 600 }}
                >
                  {due}
                </div>
              </div>
            )}
            {refund && (
              <>
                <div className={classes.details__row}>
                  <div className={classes.details__row__left}>Amount Paid</div>
                  <div
                    className={classes.details__row__right}
                    style={{ fontWeight: 600, color: "#4F6EF7" }}
                  >
                    {due}
                  </div>
                </div>
                <div className={classes.details__row}>
                  <div className={classes.details__row__left}>Refund For</div>
                  <div
                    className={classes.details__row__right}
                    style={{ fontWeight: 600 }}
                  >
                    {total}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default InvoiceDetailsBar;
