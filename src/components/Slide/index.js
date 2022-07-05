import React from "react"
import "./style.scss"

const Slide = ({ slide, currentIndex }) => {
  const { id, title, text, img } = slide
  return (
    <section
      className={`slide ${id === currentIndex ? "slide--active" : ""}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h2
        className="slide__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="slide__text" dangerouslySetInnerHTML={{ __html: text }} />
      <button className="slide__btn">Get started</button>
    </section>
  )
}

export default Slide
