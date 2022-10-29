import "./editors.scss"
import EditorItem from "./EditorItem"
import articles from "../../../../../data/articles"
import SectionTitle from "../../../SectionTitle/SectionTitle"

type Props = {}

const Editors = (props: Props) => {
  return (
    <div className="editors">
      <SectionTitle title="Editors" width="100" />
      {articles.slice(5, 7).map((article, index) => {
        return <EditorItem article={article} key={index} />
      })}
    </div>
  )
}

export default Editors
