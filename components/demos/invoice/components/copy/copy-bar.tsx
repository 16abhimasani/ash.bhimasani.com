import React from "react";
import InvoiceCopyField from "./copy-field";
import classes from "./copy.module.scss";

const InvoiceCopyBar: React.FC<{
  fields: { label: string; value: string; toastTitle: string }[];
  qrVisible: boolean;
  toggleQR: (val: boolean) => void;
  setToast: (val: {
    label: string;
    value: string;
    toastTitle: string;
    showToast: boolean;
  }) => void;
}> = ({ fields, qrVisible, toggleQR, setToast }) => {
  return (
    <div className={classes.wrapper} style={{ marginTop: qrVisible ? 32 : 0 }}>
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          <InvoiceCopyField
            {...field}
            qrVisible={qrVisible}
            toggleQR={toggleQR}
            setToast={setToast}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default InvoiceCopyBar;
