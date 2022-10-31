import { useRef } from "react"
import PopularListItem from "./PopularListItem"
import SectionTitle from "../../SectionTitle/SectionTitle"

import articles from "../../../../data/articles"
import styles from "./popular.module.scss"

type Props = {}

const PopularList = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const refMainDiv = useRef<HTMLDivElement>(null)

  function preventScroll(e: any) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  const scrollHandler = (e: any) => {
    const d = document.querySelector("#popular")
    if (e.deltaY > 0) d!.scrollLeft += 100
    else d!.scrollLeft -= 100
  }

  const enterHandler = () => {
    window.addEventListener("wheel", preventScroll, { passive: false })
  }

  const leaveHandler = () => {
    window.removeEventListener("wheel", preventScroll)
  }

  return (
    <>
      <div className={styles.mainPopular}>
        <div className={styles.section_container}>
          <SectionTitle title="Popular" width="100" />
          <div
            id="popular"
            className={styles.popular}
            onWheel={scrollHandler}
            onMouseEnter={enterHandler}
            onMouseLeave={leaveHandler}
            ref={refMainDiv}
          >
            <div ref={ref} className={styles.popular_items}>
              {articles.slice(0, 15).map((item) => {
                return <PopularListItem item={item} key={item.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularList
