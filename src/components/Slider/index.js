import React, { useReducer } from "react";
import Slide from "../Slide";
import "./style.scss";
import imgSlide1 from "./img/slider_1.jpg";
import imgSlide2 from "./img/slider_2.jpg";

const slides = [
  {
    id: 0,
    title: "Connect with telecom",
    text: "Plans start from 5$ per month",
    img: imgSlide1,
  },
  {
    id: 1,
    title: "Connect with telecom",
    text: "Premium plans start from 40$ per month",
    img: imgSlide2,
  },
];

const Slider = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    slides: slides,
  });

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__items">
          {state.slides.map((slide) => (
            <Slide
              key={slide.id}
              id={slide.id}
              slide={slide}
              currentIndex={state.currentIndex}
            />
          ))}
        </div>
        <div className="slider__arrows">
          <div
            className="slider__arrows-left"
            onClick={() => dispatch({ type: ACTIONS.PREV })}
          ></div>
          <div
            className="slider__arrows-right"
            onClick={() => dispatch({ type: ACTIONS.NEXT })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

const ACTIONS = {
  NEXT: "next",
  PREV: "prev",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEXT:
      return {
        ...state,
        currentIndex:
          state.currentIndex === state.slides.length - 1
            ? 0
            : state.currentIndex + 1,
      };
    case ACTIONS.PREV:
      return {
        ...state,
        currentIndex:
          state.currentIndex === 0
            ? state.slides.length - 1
            : state.currentIndex - 1,
      };
    default:
      return state;
  }
}
