import "./first-section.scss"
import one from "../../../../assets/img/img/1.jpg"
import two from "../../../../assets/img/img/2.jpg"
import three from "../../../../assets/img/img/3.jpg"
import calendar from "../../../../assets/img/calendar.svg"
import user from "../../../../assets/img/user.svg"

type Props = {}

const FirstSection = (props: Props) => {
  return (
    <div className="first-section-container">
      <section className="first-section">
        <div className="first-left">
          <div className="left-item">
            <div className="left-image">
              <img className="left-img" src={one} alt="" />
            </div>
            <div className="first-left-body">
              <div className="left-tag">Game</div>
              <h2 className="left-title">
                In Game Age advantages end sufficient eat expression
              </h2>
              <div className="left-by">
                <span className="lef-by-by">By</span>
                <span className="left-by-title">
                  <img className="left-by-user" src={user} alt="" /> Sora
                  Bloggin Tips
                </span>
                <span className="left-by-date">
                  <img className="left-by-calendar" src={calendar} alt="" />
                  June 11, 2022
                </span>
              </div>
              <div className="left-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
                veritatis cumque. Quasi consectetur facere doloremque quis
                possimus accusantium esse corrupti, expedita animi, est rerum
                alias aliquid aperiam saepe commodi! Voluptates doloribus minima
                quia deleniti quam neque veritatis! Voluptatibus provident,
                optio quibusdam aut repudiandae maiores id, commodi deleniti
                nesciunt dicta aperiam.
              </div>
            </div>
          </div>
        </div>

        <div className="first-right">
          <div className="right-item">
            <div className="right-item">
              <div className="right-image">
                <img className="right-img" src={three} alt="" />
              </div>
            </div>
            <div className="right-tag">In Game</div>
            <div className="right-title">
              In Game Age advantages end sufficient eat expression
            </div>
            <div className="right-by">
              <span className="right-by-title">Sora Bloggin Tips</span>
              <span className="right-by-date">June 11, 2022</span>
            </div>
          </div>
          <div className="right-item">
            <div className="right-item">
              <div className="right-image">
                <img className="right-img" src={two} alt="" />
              </div>
            </div>
            <div className="right-tag">In Game</div>
            <div className="right-title">
              In Game Age advantages end sufficient eat expression
            </div>
            <div className="right-by">
              <span className="right-by-title">Sora Bloggin Tips</span>
              <span className="right-by-date">June 11, 2022</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSection
