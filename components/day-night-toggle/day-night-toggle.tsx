import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useLocalStorage } from "../../utils/hooks";
import classes from "./day-night-toggle.module.scss";

export const ThemeContext = React.createContext({ dark: false });

const DayNightToggle: React.FC<{
  setTheme: Dispatch<SetStateAction<{ dark: boolean }>>;
}> = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const [savedTheme, saveTheme] = useLocalStorage("theme", "light");
  const toggle = () => {
    setTheme({ dark: !theme.dark });
    saveTheme(theme.dark ? "light" : "dark");
  };
  useEffect(() => {
    setTheme({ dark: savedTheme === "dark" });
  }, []);
  return (
    <div className={classes.wrapper}>
      <label className={classes.toggle}>
        <input type="checkbox" checked={!theme.dark} onChange={toggle} />
        <div></div>
      </label>
    </div>
  );
};

export default DayNightToggle;
