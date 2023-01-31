import { Routes, Route } from "react-router-dom"

import LeftArticleDetail from "../components/Main/Sections/First/LeftArticleDetail"

const BaseRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<LeftArticleDetail />} />
      </Routes>
    </>
  )
}

export default BaseRouter
