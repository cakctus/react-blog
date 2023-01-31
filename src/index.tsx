import ReactDOM from "react-dom/client"
import App from "./containers/App/App"
import { BrowserRouter } from "react-router-dom"
import "./assets/scss/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
