import React, { useState, useEffect, useRef } from "react"
import PopularListItem from "./PopularListItem"

import articles from "../../../../data/articles"
import styles from "./popular.module.scss"

type Props = {}

const PopularList = (props: Props) => {
  const [left, setLeft] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const refMainDiv = useRef<HTMLDivElement>(null)
  const [visibleDiv, setVisibleDiv] = useState(true)

  const scrollHandler = (e: any) => {
    // let target = e.target

    // while (target.scrollWidth <= target.clientWidth) {
    //   if (target == document.body) {
    //     console.log("1")
    //     setVisibleDiv(false)
    //     break
    //   }
    //   target = target.parentElement
    // }
    // if (target != document.body) {
    //   if (target.scrollLeft <= 0 && e.deltaX < 0) {
    //     console.log("start")
    //     e.preventDefault()
    //   } else if (
    //     target.clientWidth + target.scrollWidth >= target.scrollWidth &&
    //     e.deltaX > 0
    //   ) {
    //     console.log("end")
    //     e.preventDefault()
    //   }
    // }
    // console.log(ref.current!.offsetHeight, "offsetHeight")
    // console.log(ref.current!.clientHeight, "clientHeight")
    // console.log(ref.current!.scrollLeft, "scrollHeight")
    // console.log(ref.current!.offsetLeft, "offsetLeft")
    // ref.current!.style.position = "relative"
    // ref.current!.style.left = `-${left}px`

    // console.log(refMainDiv.current!.scrollWidth, "scrollWidth")

    // if (refMainDiv.current!.scrollWidth === 1000) {
    //   console.log("1000")
    //   ref.current!.style.position = "relative"
    //   ref.current!.style.left = "0px"
    //   setLeft(0)
    // } else if (e.deltaY < 0 && left >= -100) {
    //   console.log("-")
    //   console.log(left)
    //   setLeft(left - 100)
    //   ref.current!.style.position = "relative"
    //   ref.current!.style.left = `-${left + 100}px`
    // } else if (e.deltaY > 0 && refMainDiv.current!.scrollWidth !== 1000) {
    //   console.log("+")
    //   console.log(left)
    //   setLeft((prev) => prev + 100)
    //   ref.current!.style.position = "relative"
    //   ref.current!.style.left = `-${left}px`
    // }

    const d = document.querySelector("#popular")

    if (e.deltaY > 0) d!.scrollLeft += 100
    else d!.scrollLeft -= 100

    // if (e.deltaY > 0 && refMainDiv.current!.scrollWidth !== 1000) {
    //   console.log("+")
    //   console.log(left)
    //   setLeft(left + 100)
    //   ref.current!.style.position = "relative"
    //   ref.current!.style.left = `-${left}px`
    // } else if (e.deltaY < 0 && left >= -100) {
    //   console.log("-")
    //   console.log(left)
    //   setLeft(left - 100)
    //   ref.current!.style.position = "relative"
    //   ref.current!.style.left = `-${left + 100}px`
    // }
  }

  useEffect(() => {
    console.log(left)
  }, [left])

  const mouseEnterHandler = (e: any) => {
    // document.body.style.overflow = "hidden"
    // document.body.style.position = "fixed"
  }

  const mouseOutHandler = (e: any) => {
    if (e.relatedTarget !== "popular_items") {
      //   document.body.style.overflow = "auto"
      //   document.body.style.position = "relative"
    }
  }

  return (
    <div
      id="popular"
      className={styles.popular}
      onWheel={scrollHandler}
      onMouseMove={mouseEnterHandler}
      onMouseOut={mouseOutHandler}
      ref={refMainDiv}
    >
      <div ref={ref} className={styles.popular_items}>
        {articles.slice(0, 15).map((item) => {
          return <PopularListItem item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default PopularList
