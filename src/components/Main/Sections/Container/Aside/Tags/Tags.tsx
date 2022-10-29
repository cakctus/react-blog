import { useState, useEffect } from "react"
import SectionTitle from "../../../../SectionTitle/SectionTitle"
import TagsItem from "./TagsItem"
import articles from "../../../../../../data/articles"

type Props = {}

const Tags = (props: Props) => {
  const [tagList, setTagList] = useState({})

  useEffect(() => {
    const tags = articles.map((item) => {
      const { tag } = item
      return tag
    })
    const set = new Set(tags.flat())
    setTagList(set)
  }, [])

  return (
    <>
      <SectionTitle title="Tags" width="100%" />
      <div className="articles-tags">
        <TagsItem tags={tagList} />
      </div>
    </>
  )
}

export default Tags
