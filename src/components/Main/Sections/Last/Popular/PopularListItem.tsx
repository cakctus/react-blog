import calendar from "../../../../../assets/img/calendar.svg"
import styles from "./popular.module.scss"
type Props = {
  article: any
}

const PopularListItem = ({ article }: Props) => {
  const { tags, image, title, by, date, content } = article
  return (
    <div className={styles.contentItem}>
      <div className={styles.contentImage}>
        <img className={styles.contentImg} src={image} alt="" />
      </div>
      <div className={styles.contentBody}>
        <h2 className={styles.contentTitle}>{title}</h2>
        <div className={styles.contentBy}>
          <span className={styles.contentByDate}>
            <img className={styles.contentByCalendar} src={calendar} alt="" />
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PopularListItem
