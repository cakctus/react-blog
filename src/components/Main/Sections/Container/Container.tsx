import Recent from "./Recent/Recent"
import Aside from "./Aside/Aside"
import Editors from "./Editors/Editors"
import "./container.scss"

type Props = {}

const Container = (props: Props) => {
  return (
    <>
      <div className="section-container">
        <div className="grid-container">
          <Recent />
          <Aside />
          <Editors />
        </div>
      </div>
    </>
  )
}

export default Container
