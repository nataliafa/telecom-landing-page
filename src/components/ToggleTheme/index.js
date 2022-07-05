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
      setValue(theme)
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, value)
    }
  }, [value, onThemeChange])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, value)
    onThemeChange(value)
  }, [value, onThemeChange])

  const handleChange = useCallback(() => {
    if (value === VALUE_LIGHT) {
      setValue(VALUE_DARK)
    } else if (value === VALUE_DARK) {
      setValue(VALUE_LIGHT)
    }
  }, [value])

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
