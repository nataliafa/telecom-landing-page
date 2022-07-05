import React, { useCallback, useEffect, useState } from "react"
import Slider from "rc-slider"
import Handle from "rc-slider/lib/Handles/Handle"
import "./style.scss"
import handle from "./img/handle.svg"

const RangeSlider = ({ steps, defaultValue, onChange }) => {
  const [marks, setMarks] = useState({})

  useEffect(() => {
    const marks = {}
    steps.forEach((element) => {
      marks[element.toString()] = <></>
    })
    setMarks(marks)
  }, [steps])

  const customOnChange = useCallback(
    (value) => {
      if (onChange) {
        onChange(steps.indexOf(value))
      }
    },
    [steps, onChange]
  )

  return (
    <div className="range-slider">
      <Slider
        min={0}
        defaultValue={defaultValue}
        marks={marks}
        step={null}
        handleRender={(node) => (
          <Handle {...node.props}>
            <img src={handle} alt="" />
          </Handle>
        )}
        onChange={customOnChange}
      />
    </div>
  )
}

export default RangeSlider
