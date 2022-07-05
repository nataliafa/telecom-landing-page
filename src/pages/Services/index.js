import React, { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../ThemeProvider";

const Services = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`services services--${theme}`}>
      <h2 className="services__title">Services</h2>
    </section>
  );
};

export default Services;
