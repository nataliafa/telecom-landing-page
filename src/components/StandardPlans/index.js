import React, { useState, useContext } from "react"
import Plan from "../Plan"
import { ThemeContext } from "../../ThemeProvider"
import classNames from "classnames"
import "./style.scss"
import plans from "./plans.json"

const StandardPlans = () => {
  const { theme } = useContext(ThemeContext)
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <section className={`standard-plans standard-plans--${theme}`}>
      <h3 className="standard-plans__title">Pay only for what you need</h3>
      <div className="standard-plans__tabs">
        <p
          className={classNames("standard-plans__tab", {
            "standard-plans__tab--active": activeTabIndex === 0,
          })}
          onClick={() => setActiveTabIndex(0)}
        >
          Plans for smartphones
        </p>
        <p
          className={classNames("standard-plans__tab", {
            "standard-plans__tab--active": activeTabIndex === 1,
          })}
          onClick={() => setActiveTabIndex(1)}
        >
          Plans for tablets/modems
        </p>
      </div>
      <div className="standard-plans__plans">
        {plans.map((element) => (
          <Plan key={element.id} plan={element} />
        ))}
      </div>
    </section>
  )
}

export default StandardPlans
