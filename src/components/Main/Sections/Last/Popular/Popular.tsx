import PopularListItem from "./PopularListItem"
import articles from "../../../../../data/articles"
import styles from "./popular.module.scss"

type Props = {}

const Popular = (props: Props) => {
  return (
    <div className={styles.popular}>
      <h3 className={styles.sectionTitle}>Popular Post</h3>
      {articles.slice(7, 11).map((article, index) => {
        return <PopularListItem article={article} key={index} />
      })}
    </div>
  )
}

export default Popular
