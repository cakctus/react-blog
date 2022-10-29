import "./first-section.scss"
import articles from "../../../../data/articles"
import LeftArticle from "./LeftArticle"
import RightArticle from "./RightArticle"

type Props = {}

const FirstSection = (props: Props) => {
  return (
    <div className="first-section-container">
      <section className="first-section">
        <div className="first-left">
          {articles.slice(0, 1).map((item, index) => {
            return <LeftArticle item={item} key={index} />
          })}
        </div>

        <div className="first-right">
          {articles.slice(1, 3).map((item, index) => {
            return <RightArticle item={item} key={index} />
          })}
        </div>
      </section>
    </div>
  )
}

export default FirstSection
