import FirstLeftsItem from "./FirstLeftsItem"
import articles from "../../../../../data/articles"
import "./first-left.scss"
type Props = {}

const FirstLeft = (props: Props) => {
  return (
    <div className="first-left">
      {articles.slice(5, 7).map((article, index) => {
        return <FirstLeftsItem article={article} key={index} />
      })}
    </div>
  )
}

export default FirstLeft
