import React, { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import classes from "./folio.module.scss";

const ThemeToggle: React.FC = () => {
  const { setDark } = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={classes.toggle}
      aria-label="Toggle color theme"
      onClick={() => {
        const next = !document.documentElement.classList.contains("dark");
        setDark(next);
      }}
    >
      <svg className={classes.iconMoon} viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M9.2 1.6a5.8 5.8 0 1 0 5.2 8.6 4.7 4.7 0 0 1-5.2-8.6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
      <svg className={classes.iconSun} viewBox="0 0 16 16" aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="2.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M8 1.8 V3.4 M8 12.6 V14.2 M1.8 8 H3.4 M12.6 8 H14.2 M3.4 3.4 L4.5 4.5 M11.5 11.5 L12.6 12.6 M12.6 3.4 L11.5 4.5 M4.5 11.5 L3.4 12.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
