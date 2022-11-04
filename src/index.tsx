import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/scss/index.scss"
import App from "./containers/App/App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <>
    <App />
  </>
)