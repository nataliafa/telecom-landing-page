import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ThemeContext } from "./ThemeProvider"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Plans from "./pages/Plans"
import Numbers from "./pages/Numbers"
import Organizations from "./pages/Organizations"
import Roaming from "./pages/Roaming"
import Profile from "./pages/Profile"
import "./App.scss"

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route exact path="/roaming" element={<Roaming />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
