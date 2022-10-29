import ThirdBottomItems from "./ThirdBottomItems"
import articles from "../../../../../data/articles"
import "./third-bottom.scss"

type Props = {}

const ThirdBottom = (props: Props) => {
  return (
    <div className="third-bottom">
      {articles.slice(0, 15).map((item) => {
        return <ThirdBottomItems item={item} key={item.id} />
      })}
    </div>
  )
}

export default ThirdBottom
