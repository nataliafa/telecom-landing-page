import React, { useState, useEffect } from "react";
import RangeSlider from "../RangeSlider";
import Switch from "../Switch";
import "./style.scss";
import duck from "./img/duck.png";
import star from "./img/star.png";
import trophy from "./img/trophy.png";
import infinity from "./img/infinity.svg";
import information from "./img/information.svg";
import globe from "./img/globe.svg";
import beeline from "./img/beeline.png";

const Plan = ({ plan }) => {
  const [packIndex, setPackIndex] = useState(0);
  const [packValue, setPackValue] = useState(Object.assign({}, plan.packs[0]));
  const [with4g, setWith4g] = useState(false);

  useEffect(() => {
    const newPack = Object.assign({}, plan.packs[packIndex]);
    if (with4g) {
      newPack.price += 2;
    }
    setPackValue(newPack);
  }, [packIndex, with4g, plan.packs]);

  const getIcon = () => {
    switch (plan.template) {
      case "basic":
        return duck;
      case "bright":
        return star;
      case "extended":
        return trophy;
      case "premium-bright":
        return star;
      case "premium-extended":
        return trophy;
      default:
        return duck;
    }
  };

  return (
    <div className={`plan plan--${plan.template}`}>
      <div className="plan__header">
        <img className="plan__header-image" src={getIcon()} alt="img" />
        <p className="plan__header-title">{plan.name}</p>
        {plan.popular ? (
          <>
            <div className="plan__header-separator" />
            <span className="plan__header-popular">Our pick</span>
          </>
        ) : null}
      </div>
      <div className="plan__packages-label">Set up the plan</div>
      <div className="plan__package">
        <div className="plan__package-data-volume">
          <span className="plan__package-value">{packValue.dataVolume}</span>
          <span className="plan__package-unit">GB</span>
        </div>
        <div className="plan__package-minutes">
          <span className="plan__package-value">{packValue.minutes}</span>
          <span className="plan__package-unit">min</span>
        </div>
        <div className="plan__package-sms">
          <span className="plan__package-value">{packValue.sms}</span>
          <span className="plan__package-unit">sms</span>
        </div>
      </div>
      <div className="plan__range-slider">
        <RangeSlider
          steps={[0, 33, 66, 100]}
          onChange={(index) => setPackIndex(index)}
        />
      </div>
      <div className="plan__4g">
        <div className="plan__4g-container">
          <span className="plan__4g-label">Unlimited 4G</span>
          <Switch onChange={(checked) => setWith4g(checked)} />
          <span className="plan__4g-price">+2$</span>
        </div>
      </div>
      <div className="plan__info">
        <p className="plan__info-item">
          <img src={infinity} alt="Infinity" />
          <span>Unlimited social media and messengers</span>
          <img src={information} alt="Information" />
        </p>
        <p className="plan__info-item">
          <img src={globe} alt="Globe" />
          <span>+300 min in roaming</span>
        </p>
        <p className="plan__info-item">
          <img src={beeline} alt="Beeline" />
          <span>Unlimited call and sms with Telecom network</span>
        </p>
      </div>
      <div className="plan__footer">
        <p className="plan__footer-price">{packValue.price} $ per month</p>
        <button className="plan__footer-button">{"Select >"}</button>
      </div>
    </div>
  );
};

export default Plan;
