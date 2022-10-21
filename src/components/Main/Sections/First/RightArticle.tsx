import calendar from "../../../../assets/img/calendar.svg"
import user from "../../../../assets/img/user.svg"

import three from "../../../../assets/img/img/2.jpg"

type Props = {
  item: any
}

const RightArticle = ({ item }: Props) => {
  const { tags, image, title, by, date, content } = item
  return (
    <div className="content-item">
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
      </div>
    </div>
  )
}

export default RightArticle
