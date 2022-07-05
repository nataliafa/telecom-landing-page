import React, { useContext } from "react"
import "./style.scss"
import { ThemeContext } from "../../ThemeProvider"

const Numbers = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`numbers numbers--${theme}`}>
      <h2 className="numbers__title">Numbers</h2>
    </section>
  )
}

export default Numbers
