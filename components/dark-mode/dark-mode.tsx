import React, { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import { useLocalStorage } from "../../utils/hooks";
import classes from "../header/header.module.scss";

const ThemeToggle: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [, saveTheme] = useLocalStorage("theme", "light");

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    theme.setDark(next);
    saveTheme(next ? "dark" : "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next ? "#0e0e0e" : "#fafafa");
  };

  return (
    <button
      type="button"
      className={classes.theme}
      aria-pressed={theme.ready ? theme.dark : undefined}
      aria-label={
        theme.ready
          ? theme.dark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Theme"
      }
      onClick={toggle}
    >
      <span className={classes["when-light"]}>Dark</span>
      <span className={classes["when-dark"]}>Light</span>
    </button>
  );
};

export default ThemeToggle;
