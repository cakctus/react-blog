import SecondRightsItem from "./SecondRightsItem"
import articles from "../../../../../data/articles"

import "./second-right.scss"

type Props = {}

const SecondRight = (props: Props) => {
  return (
    <div className="second-right">
      {articles.slice(7, 11).map((article, index) => {
        return <SecondRightsItem article={article} key={index} />
      })}
    </div>
  )
}

export default SecondRight
