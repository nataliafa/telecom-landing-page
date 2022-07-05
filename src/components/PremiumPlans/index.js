import React, { useContext } from "react";
import Plan from "../Plan";
import { ThemeContext } from "../../ThemeProvider";
import "./style.scss";
import plans from "./plans.json";

const PremiumPlans = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`premium-plans premium-plans--${theme}`}>
      <div className="premium-plans__plans">
        <div className="premium-plans__benefits">
          <p className="premium-plans__title">
            Take it to the next level
            <br /> with premium plans
          </p>
          <p className="premium-plans__benefit">premium service</p>
          <p className="premium-plans__benefit">private support line</p>
          <p className="premium-plans__benefit">awesome design</p>
          <p className="premium-plans__benefit">free 30 days offer</p>
          <p className="premium-plans__benefit">unlimited nationals calls</p>
        </div>
        {plans.map((element) => (
          <Plan key={element.id} plan={element} />
        ))}
      </div>
    </section>
  );
};

export default PremiumPlans;
