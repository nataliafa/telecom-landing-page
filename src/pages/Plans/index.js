import React, { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../ThemeProvider";

const Plans = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`plans plans--${theme}`}>
      <h2 className="plans__title">Plans</h2>
    </section>
  );
};

export default Plans;
