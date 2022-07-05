import React, { useCallback, useEffect, useState } from "react";
import Slider, { Handle } from "rc-slider";
import "./style.scss";
import handle from "./img/handle.svg";

const CustomHandle = ({ value, dragging, index, ...props }) => {
  return (
    <Handle value={value} {...props}>
      <img src={handle} alt="Handle" />
    </Handle>
  );
};

const RangeSlider = ({ steps, defaultValue, onChange }) => {
  const [marks, setMarks] = useState({});

  useEffect(() => {
    const marks = {};
    steps.forEach((element) => {
      marks[element.toString()] = {};
    });
    setMarks(marks);
  }, [steps]);

  const customOnChange = useCallback(
    (value) => {
      if (onChange) {
        onChange(steps.indexOf(value));
      }
    },
    [steps, onChange]
  );

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
