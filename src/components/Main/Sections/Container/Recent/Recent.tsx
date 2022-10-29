import { useState } from "react"
import RecentItemList from "./RecentItemList"
import articles from "../../../../../data/articles"
import "./recent.scss"
import SectionTitle from "../../../SectionTitle/SectionTitle"

type Props = {}

type ArticlesList = {
  id: number
  tag: string[]
  title: string
  by: string
  date: string
  image: string
  readonly tags: string
  content: string
}[]

const Recent = (props: Props) => {
  const [articlesList, setArticlesList] = useState(articles.slice(0, 6))
  const [count, setCount] = useState(14)
  const [articleLength, setArticlesLenght] = useState(false)

  const moreHandler = () => {
    setCount(count + 4)
    if (count >= articles.length) {
      setArticlesLenght(true)
    } else {
      setArticlesLenght(false)
    }
    setArticlesList((prev: any) => {
      console.log([...prev.slice(0, 3), ...prev.slice(3, count)])
      // return [...articles.slice(0, 6), ...articles.slice(6, count)]
      return [...articles.slice(0, 6), ...articles.slice(10, count)]
    })
    // console.log(articlesList)
  }

  return (
    <div className="recent">
      <SectionTitle title="Recent" width="100" />
      {articlesList.map((article, index) => {
        return <RecentItemList article={article} key={index} />
      })}
      <div className="button-block">
        <div>{articleLength && "No more data"}</div>
        {articleLength || (
          <button className="btn btn-more" onClick={moreHandler}>
            more
          </button>
        )}
      </div>
    </div>
  )
}

export default Recent
