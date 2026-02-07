import { useContext } from 'react'
import visitorNameContext from '../context/nameContext'
import "./css/about.css"
const About = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  return (
    <>
      <div className="profile-picture-container">
        <div className="img-container">
          <img src="https://avatars.githubusercontent.com/u/144550157?v=4" alt="" />
        </div>
      </div>
      <div className="about-container">
        <div className='greeting'>

          <p><span className='line'>$</span><span className='keyword'>echo</span>
            Hello <span className='visitor-name'>{visitorName}</span>, I always love those people who wants to know me. </p>
        </div>
        <div className='bio'>

          <p><span className='line'>$</span><span className='keyword'>cat</span>
            bio.txt </p>
          <ul className=''>
            <li><span className='hints'>Installed on:</span> 2004/11/11</li>
            <li><span className='hints'>Location:</span> Based in Nepal. Serving the world via WiFi.  </
            li>
            <li> <span className='hints'>Education: </span> BCA Student. Surviving on instant noodles and debugging sessions. </
            li>
            <li><span className='hints'>Designation: </span>Fullstack Developer.</li>
            <li><span className="hints">Stack: </span>
              React | Node.js | MongoDB | Pure determination. </li>
            <li><span className='hints'>Currently: </span> Debugging life and deploying projects 24/7.</li>
            <li><span className="hints">Motto: </span>
              If it compiles, it ships… eventually. </li>
          </ul>
          <div>

            <span className="keyword">Available for hire</span>
            Will code your dreams or my nightmares.
          </div>

        </div>
        <div>
          <p><span className='line'>$</span><span className='keyword'>echo</span>
            Let's build something together. </p>
        </div>
      </div>
    </>
  )
}

export default About