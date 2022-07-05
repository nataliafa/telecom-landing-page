import React, { useCallback, useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../ThemeProvider"
import "./style.scss"

const LOCAL_STORAGE_KEY = "theme"
const VALUE_LIGHT = "light"
const VALUE_DARK = "dark"

const ToggleTheme = () => {
  const { onThemeChange } = useContext(ThemeContext)
  const [value, setValue] = useState(VALUE_LIGHT)

  useEffect(() => {
    const theme = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (theme) {
      onThemeChange(theme)
      setValue(theme)
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, VALUE_LIGHT)
    }
  }, [onThemeChange])

  const handleChange = useCallback(
    (event) => {
      let value
      if (event.target.checked) {
        value = VALUE_DARK
      } else {
        value = VALUE_LIGHT
      }
      setValue(value)
      onThemeChange(value)
      localStorage.setItem(LOCAL_STORAGE_KEY, value)
    },
    [onThemeChange]
  )

  return (
    <div className="toggle-theme">
      <label className="toggle-theme__switch">
        <input
          className="toggle-theme__input"
          type="checkbox"
          onChange={handleChange}
          checked={value === VALUE_DARK}
        />
        <span className="toggle-theme__toggle" />
      </label>
    </div>
  )
}

export default ToggleTheme
