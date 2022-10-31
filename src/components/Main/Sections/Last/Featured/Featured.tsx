import FeaturedListItem from "./FeaturedListItem"
import articles from "../../../../../data/articles"
import styles from "./featured.module.scss"

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className={styles.featured}>
      <h3 className={styles.sectionTitle}>Featured Post</h3>
      {articles.slice(13, 14).map((article, index) => {
        return <FeaturedListItem article={article} key={index} />
      })}
    </div>
  )
}

export default Featured
