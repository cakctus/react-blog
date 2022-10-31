import styles from "./footer.module.scss"

type Props = {}

const Footer = (props: Props) => {
  const items = ["home", "about", "contact us"]
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
          <ul className={styles.footerUl}>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
