import React, { useCallback, useState } from "react"
import "./style.scss"

const Switch = ({ onChange }) => {
  const [checked, setChecked] = useState(false)

  const onCheckboxChange = useCallback(() => {
    const value = !checked
    setChecked(value)
    if (onChange) {
      onChange(value)
    }
  }, [onChange, checked])

  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChange}
      />
      <span className="switch__toggle" />
    </label>
  )
}

export default Switch
