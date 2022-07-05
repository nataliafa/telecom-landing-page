import React, { useContext } from "react";
import Slider from "../../components/Slider";
import StandardPlans from "../../components/StandardPlans";
import PremiumPlans from "../../components/PremiumPlans";
import { ThemeContext } from "../../ThemeProvider";
import "./style.scss";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`home home--${theme}`}>
      <Slider />
      <StandardPlans />
      <PremiumPlans />
    </section>
  );
};

export default Home;
