import React, { useContext } from "react";
import Nav from "../Nav";
import ToggleTheme from "../ToggleTheme/index";
import { ThemeContext } from "../../ThemeProvider";
import { Link } from "react-router-dom";
import "./style.scss";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`header header--${theme}`}>
      <Nav />
      <ToggleTheme />
      <Link to="/profile" className="header__btn">
        Account
      </Link>
    </div>
  );
}

export default Header;
