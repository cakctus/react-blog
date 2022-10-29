import SectionTitle from "../../../../SectionTitle/SectionTitle"
import YouTubeIcon from "@mui/icons-material/YouTube"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import "./social.scss"

type Props = {}

const SocialList = (props: Props) => {
  return (
    <>
      <SectionTitle title="Social" width="100" />
      <div className="social">
        <YouTubeIcon />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </>
  )
}

export default SocialList
