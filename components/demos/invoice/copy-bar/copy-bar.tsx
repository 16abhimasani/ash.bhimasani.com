import React, { Dispatch, SetStateAction } from "react";
import classes from "./copy-bar.module.scss";
import InvoiceCopyField from "./copy-field";

const InvoiceCopyBar: React.FC<{
  fields: { label: string; value: string; toastTitle: string }[];
  qrVisible: boolean;
  toggleQR: (val: boolean) => void;
  setToast: Dispatch<
    SetStateAction<{
      label: string;
      toastTitle: string;
      value: string;
      showToast: boolean;
    }>
  >;
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
