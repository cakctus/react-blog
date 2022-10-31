import Random from "./Random/Random"
import Featured from "./Featured/Featured"
import Popular from "./Popular/Popular"

import articles from "../../../../data/articles"

import styles from "./last.module.scss"

type Props = {}

const Last = (props: Props) => {
  return (
    <>
      <div className={styles.last_container}>
        <div className={styles.last}>
          <Random />
          <Featured />
          <Popular />
        </div>
      </div>
    </>
  )
}

export default Last
