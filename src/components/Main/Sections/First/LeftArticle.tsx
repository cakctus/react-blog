import { useState, useEffect } from "react"
import articles from "../../../../data/articles"
import calendar from "../../../../assets/img/calendar.svg"
import user from "../../../../assets/img/user.svg"
import "./first-section.scss"

type Props = {
  item: any
  indicator?: any
}

const LeftArticle = ({ item, indicator }: Props) => {
  const [count, setCount] = useState(0)
  // const [lastItem, setLastItem] = useState(articles.length - 1)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex: any) => {
    const lastItem = articles.length - 1
    if (newIndex < 0) {
      newIndex = lastItem
    } else if (newIndex > lastItem) {
      newIndex = 0
    }
    setCount(newIndex)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused) {
        updateIndex(count + 1)
      }
    }, 5000)
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  })

  return (
    <>
      {articles.map((article, articleId) => {
        const { tags, image, title, by, date, content } = article
        let position = "lastSlide"
        if (articleId === count) {
          position = "activeSlide"
        }
        return (
          <article
            key={articleId}
            className={`content-item ${position}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="content-image">
              <img className="content-img" src={image} alt="" />
            </div>
            <div className="content-body">
              <div className="content-tag">{tags}</div>
              <h2 className="content-title">{title}</h2>
              <div className="content-by">
                <span className="content-by-by">By</span>
                <span className="content-by-title">
                  <img className="content-by-user" src={user} alt="" /> {by}
                </span>
                <span className="content-by-date">
                  <img className="content-by-calendar" src={calendar} alt="" />
                  {date}
                </span>
              </div>
              <div className="content-content">{content.slice(0, 350)}...</div>
            </div>
          </article>
        )
      })}

      <div className="indicators">
        {articles.map((article, index) => {
          return (
            <div
              key={index}
              className={` indicator ${index === count ? "active" : ""}`}
              onClick={() => {
                updateIndex(index)
              }}
            ></div>
          )
        })}
      </div>
    </>
  )
}

export default LeftArticle
