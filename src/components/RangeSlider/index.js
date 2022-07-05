import React from "react";
import Slider, { Handle } from "rc-slider";
import "./style.scss";
import handle from "./img/handle.svg";

const CustomHandle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Handle value={value} {...restProps}>
      <img src={handle} alt="Handle" />
    </Handle>
  );
};

const RangeSlider = ({ steps, defaultValue, onChange }) => {
  const marks = {};
  steps.forEach((element) => {
    marks[element.toString()] = {};
  });

  const customOnChange = (value) => {
    if (onChange) {
      onChange(steps.indexOf(value));
    }
  };

  return (
    <div className="range-slider">
      <Slider
        min={0}
        defaultValue={defaultValue}
        marks={marks}
        step={null}
        handle={CustomHandle}
        onChange={customOnChange}
      />
    </div>
  );
};

export default RangeSlider;
