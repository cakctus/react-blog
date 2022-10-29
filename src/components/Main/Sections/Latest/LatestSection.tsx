import { useState, useEffect } from "react"
import "./latest-section.scss"
import LatestItems from "./LatestItems"
import SectionTitle from "../../SectionTitle/SectionTitle"
import articles from "../../../../data/articles"

type Props = {}

const LatestSection = (props: Props) => {
  const [move, setMove] = useState(0)
  const [length, setLength] = useState(6)
  const [show, setShow] = useState(false)

  const styles = {
    transform: `translateX(${move}px)`,
  }

  //   document
  //     .querySelector(".latest-section-left")
  //     ?.addEventListener("click", clickLeftHandler)

  //   document
  //     .querySelector(".latest-section-right")
  //     ?.addEventListener("click", clickRightHandler)

  function clickRightHandler() {
    setMove((prev) => {
      if (length === 3) {
        return 0
      }
      return move + 100
    })
    setLength((prev) => {
      if (prev === articles.length) {
        return 3
      }
      return prev + 3
    })
    console.log(length, "length")
    console.log(articles.length, "article length")
  }

  function clickLeftHandler() {
    if (move <= 0) {
      return setMove(0)
    }
    setMove(move - 100)
  }

  function enterHandler() {
    setShow(true)
  }

  function outHandler() {
    setShow(false)
  }

  return (
    <>
      <section className="latest-section">
        <div
          className="latest"
          onMouseOver={enterHandler}
          onMouseOut={outHandler}
        >
          <div className="latest-section-container">
            <SectionTitle title="Latest Post" width="1000" />
            <div
              className="latest-section-move"
              style={{ display: `${show ? "flex" : "none"}` }}
            >
              <div
                className="latest-section-left arrow-left"
                onClick={clickLeftHandler}
              ></div>
              <div
                className="latest-section-right arrow-right"
                onClick={clickRightHandler}
              ></div>
            </div>
            <div
              className="latest-items"
              style={{ transform: `translateX(-${move}%)` }}
            >
              {articles.slice(0, 15).map((item) => {
                return <LatestItems item={item} key={item.id} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestSection
