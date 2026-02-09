import { useContext } from 'react'
import visitorNameContext from '../context/nameContext'
import "./css/skill.css"
import jsImage from "../assets/img/js.png"
import pyImage from "../assets/img/py.png"
import reactImage from "../assets/react.svg"
import htmlImage from "../assets/img/html.png"
import cssImage from "../assets/img/css.png"
import nodeImage from "../assets/img/node.png"
import expressImage from "../assets/img/express.png"
import mongodbImage from "../assets/img/mongodb.png"
const Skill = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  return (
    <>
      <div>



        <div className='greeting'>

          <p><span className='line'>$</span>
            <span className='keyword'>Skills Loaded. </span></p>
          <p><span className='line'>$</span><span className="visitor-name">{visitorName}</span>,These are the
            Stuff I learned after Googling “why is this not working?” at 3 AM.</p>
        </div>

        <div className='skill-container'>
          <div>
            <p><span className='line'>$</span>
              <span className='keyword'>Languages: </span></p>
            <div className="logo-container">
              <img src={jsImage} alt="" />
              <img src={pyImage} alt="" />
            </div>
          </div>

          <div>

            <p><span className='line'>$</span>
              <span className='keyword'>Front End: </span></p>
            <div className="logo-container">
              {/* js */}

              <img src={reactImage} alt="" />
              {/* <img src={jsImage} alt="" /> */}
              <img src={htmlImage} alt="" />
              <img src={cssImage} alt="" />
            </div>
          </div>

          <div>

            <p><span className='line'>$</span>
              <span className='keyword'>Backend: </span></p>
            <div className="logo-container">
              {/* js */}
              <img src={nodeImage} alt="" />
              <img src={expressImage} alt="" />
              {/* <img src="" alt="" />
              <img src="" alt="" /> */}
            </div>
          </div>

          <div>

            <p><span className='line'>$</span>
              <span className='keyword'>Database: </span></p>
            <div className="logo-container">
              {/* js */}
              <img src={mongodbImage} alt="" />

            </div>
          </div>



        </div>

        <div className='greeting'>
          <p><span className='line'>$</span><span className='keyword'>Honestly,</span>Not magic. Just a lot of practice, mistakes, and refusing to give up.</p>
        </div>
      </div>
    </>
  )
}

export default Skill