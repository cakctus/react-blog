import Popular from "./Popular/Popular"
import SocialList from "./Social/SocialList"
import Tags from "./Tags/Tags"
import Category from "./Category/Category"
import "./aside.scss"

type Props = {}

const Aside = (props: Props) => {
  return (
    <div className="aside">
      <Popular />
      <SocialList />
      <Tags />
      <Category />
    </div>
  )
}

export default Aside
