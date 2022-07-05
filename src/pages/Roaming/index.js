import React, { useContext } from "react"
import "./style.scss"
import { ThemeContext } from "../../ThemeProvider"

const Roaming = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`roaming roaming--${theme}`}>
      <h2 className="roaming__title">Roaming</h2>
    </section>
  )
}

export default Roaming
