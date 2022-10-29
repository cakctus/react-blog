import FirstLeft from "./FirstLeft/FirstLeft"
import SecondRight from "./SecondRight/SecondRight"
import ThirdBottom from "./ThirdBottom/ThirdBottom"

import "./background.scss"

type Props = {}

const Background = (props: Props) => {
  return (
    <div className="background-section">
      <div className="background-container">
        <div className="background-grid">
          <FirstLeft />
          <SecondRight />
          <ThirdBottom />
        </div>
      </div>
    </div>
  )
}

export default Background
