import calendar from "../../../../../assets/img/calendar.svg"
import user from "../../../../../assets/img/user.svg"

type Props = {
  article: any
}

const SecondRightsItem = ({ article }: Props) => {
  const { tags, image, title, by, date, content } = article
  return (
    <div className="content-item2">
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

export default SecondRightsItem
