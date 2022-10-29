import "./tags.scss"

type Props = {
  tags: any
}

const TagsItem = ({ tags }: Props) => {
  const tag = Array.from(tags)

  return (
    <div className="tags-item">
      {tag.map((item: any, index) => {
        return (
          <span className="tag-item" key={index}>
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default TagsItem
