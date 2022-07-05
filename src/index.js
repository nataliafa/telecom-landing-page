import React from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./App"
import { ThemeProvider } from "./ThemeProvider"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
