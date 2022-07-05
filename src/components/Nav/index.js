import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../ThemeProvider"
import "./style.scss"

const Nav = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`nav nav--${theme}`}>
      <Link to="/">
        <div className="nav__logo"></div>
      </Link>
      <Link to="/about" className="nav__link">
        About
      </Link>
      <Link to="/services" className="nav__link">
        Services
      </Link>
      <Link to="/plans" className="nav__link">
        Plans
      </Link>
      <Link to="/numbers" className="nav__link">
        Numbers
      </Link>
      <Link to="/organizations" className="nav__link">
        Organizations
      </Link>
      <Link to="/roaming" className="nav__link">
        Roaming
      </Link>
    </div>
  )
}

export default Nav
