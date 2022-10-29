// @ts-ignore
// @ts-nocheck
import React, { useState, useEffect, useRef } from "react"
import PopularListItem from "./PopularListItem"
import SectionTitle from "../../SectionTitle/SectionTitle"

import articles from "../../../../data/articles"
import styles from "./popular.module.scss"

type Props = {}

const PopularList = (props: Props) => {
  // const [left, setLeft] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const refMainDiv = useRef<HTMLDivElement>(null)
  const [visibleDiv, setVisibleDiv] = useState(true)
  const [top, setTop] = useState()
  const [left, setLeft] = useState()

  function preventScroll(e) {
    console.log("prevent")
    e.preventDefault()
    e.stopPropagation()

    return false
  }

  const scrollHandler = (e: any) => {
    // document.body.addEventListener("scroll", (e: any) => e.preventDefault())
    const d = document.querySelector("#popular")
    if (e.deltaY > 0) d!.scrollLeft += 100
    else d!.scrollLeft -= 100
  }

  const enterHandler = () => {
    window.addEventListener("wheel", preventScroll, { passive: false })
    // setTop(window.pageYOffset || document.documentElement.scrollTop)
    // setLeft(window.pageXOffset || document.documentElement.scrollLeft)

    // window.onscroll = function (e) {
    //   console.log(e)
    //   e.preventDefault()
    // }
    // window.addEventListener("scroll", (e) => e.preventDefault())
  }

  const leaveHandler = () => {
    window.removeEventListener("wheel", preventScroll)
    // window.removeEventListener("scroll", enterHandler)
    // window.onscroll = function () {}
  }

  // useEffect(() => {}, [top, left])

  return (
    <>
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
    </>
  )
}

export default PopularList
