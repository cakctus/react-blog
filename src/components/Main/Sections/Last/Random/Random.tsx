import RandomListItem from "./RandomListItem"
import articles from "../../../../../data/articles"
import styles from "./random.module.scss"
type Props = {}

const Random = (props: Props) => {
  function to(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function from(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let result = articles.slice(from(0, 4), to(5, 15))
  result.length = 4
  console.log(result)
  return (
    <div className={styles.random}>
      <h3 className={styles.sectionTitle}>Random Post</h3>
      {result.map((article, index) => {
        return <RandomListItem article={article} key={index} />
      })}
    </div>
  )
}

export default Random
