import { useState } from "react"
import articles from "../../../../data/articles"

type Props = {}

const Indicators = (props: Props) => {
  const [id, setId] = useState(1)
  return (
    <>
      {articles.map((article, index) => {
        return (
          <div
            key={index}
            className="indicator"
            onClick={() => setId(index)}
          ></div>
        )
      })}
    </>
  )
}

export default Indicators
