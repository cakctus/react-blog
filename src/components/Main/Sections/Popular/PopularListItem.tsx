import calendar from "../../../../assets/img/calendar.svg"
import user from "../../../../assets/img/user.svg"
import styles from "./popular.module.scss"

type Props = {
  item: any
}

const PopularListItem = ({ item }: Props) => {
  const { tags, image, title, by, date } = item

  return (
    <div className={styles.contentItem}>
      <div className={styles.contentImage}>
        <img className={styles.contentImg} src={image} alt="" />
      </div>
      <div className={styles.contentBody}>
        <div className={styles.contentTag}>{tags}</div>
        <h2 className={styles.contentTitle}>{title}</h2>
        <div className={styles.contentBy}>
          <span className={styles.contentByBy}>By</span>
          <span className={styles.contentByTitle}>
            <img className={styles.contentByUser} src={user} alt="" /> {by}
          </span>
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
