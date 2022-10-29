import "./popular.scss"
import SectionTitle from "../../../../SectionTitle/SectionTitle"
import PopularItem from "./PopularItem"
import articles from "../../../../../../data/articles"

type Props = {}

const Popular = (props: Props) => {
  return (
    <>
      <SectionTitle title="Popular" width="100" />
      <div className="popular">
        {articles.slice(0, 3).map((article, index) => {
          return <PopularItem article={article} key={index} />
        })}
      </div>
    </>
  )
}

export default Popular
