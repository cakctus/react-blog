import "./first-section.scss"
import one from "../../../../assets/img/img/1.jpg"
import two from "../../../../assets/img/img/2.jpg"
import three from "../../../../assets/img/img/3.jpg"
import calendar from "../../../../assets/img/calendar.svg"
import user from "../../../../assets/img/user.svg"
import audio from "../../../../assets/audi/dog.mp3"

type Props = {}

const FirstSection = (props: Props) => {
  return (
    <div className="first-section-container">
      <section className="first-section">
        <div className="first-left">
          <div className="content-item">
            <div className="content-image">
              <img className="content-img" src={one} alt="" />
            </div>
            <div className="content-body">
              <div className="content-tag">Game</div>
              <h2 className="content-title">
                In Game Age advantages end sufficient eat expression
              </h2>
              <div className="content-by">
                <span className="content-by-by">By</span>
                <span className="content-by-title">
                  <img className="content-by-user" src={user} alt="" /> Sora
                  Bloggin Tips
                </span>
                <span className="content-by-date">
                  <img className="content-by-calendar" src={calendar} alt="" />
                  June 11, 2022
                </span>
              </div>
              <div className="content-content">
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
          <div className="content-item">
            <div className="content-image">
              <img className="content-img" src={two} alt="" />
            </div>
            <div className="content-body">
              <div className="content-tag">Game</div>
              <h2 className="content-title">
                In Game Age advantages end sufficient eat expression
              </h2>
              <div className="content-by">
                <span className="content-by-by">By</span>
                <span className="content-by-title">
                  <img className="content-by-user" src={user} alt="" /> Sora
                  Bloggin Tips
                </span>
                <span className="content-by-date">
                  <img className="content-by-calendar" src={calendar} alt="" />
                  June 11, 2022
                </span>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="content-image">
              <img className="content-img" src={three} alt="" />
            </div>
            <div className="content-body">
              <div className="content-tag">Game</div>
              <h2 className="content-title">
                In Game Age advantages end sufficient eat expression
              </h2>
              <div className="content-by">
                <span className="content-by-by">By</span>
                <span className="content-by-title">
                  <img className="content-by-user" src={user} alt="" /> Sora
                  Bloggin Tips
                </span>
                <span className="content-by-date">
                  <img className="content-by-calendar" src={calendar} alt="" />
                  June 11, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSection
