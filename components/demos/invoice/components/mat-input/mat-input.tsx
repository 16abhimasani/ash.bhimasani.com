import React from "react";
import classes from "./mat-input.module.scss";

const MaterialInput: React.FC<{
  placeholder: string;
  type: "email" | "password" | "other";
}> = ({ placeholder, type }) => {
  return (
    <div className={classes.form__group}>
      <input
        type={type}
        className={classes.form__field}
        placeholder={placeholder}
      />
      <label htmlFor={type} className={classes.form__label}>
        {placeholder}
      </label>
    </div>
  );
};

export default MaterialInput;
