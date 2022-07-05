import React, { useContext } from "react"
import "./style.scss"
import { ThemeContext } from "../../ThemeProvider"

const About = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className={`about about--${theme}`}>
      <h2 className="about__title">About</h2>
    </section>
  )
}

export default About
