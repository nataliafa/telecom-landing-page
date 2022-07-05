import React, { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../ThemeProvider";

const Organizations = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`organizations organizations--${theme}`}>
      <h2 className="organizations__title">Organizations</h2>
    </section>
  );
};

export default Organizations;
