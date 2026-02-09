import { useContext } from 'react'
import visitorNameContext from '../context/nameContext'
import "./css/project.css"
const Project = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  return (<>
    <div className='project'>

      <div className='greeting'>

        <p><span className='line'>$</span>
          <span className='visitor-name'>{visitorName},</span>
          These are the fully functional projects created by turning bugs into features and Stack Overflow into a personality.</p>
      </div>

      <div className='project-container'>
        <h3><span className='line'>$</span>
          <span className='keyword'>cat</span>
          Chat Room.txt
        </h3>
        <ul>
          <li><span className='hints'>Url:</span>
            <a href="https://web-socket-75x3.onrender.com/" target='_blank'>Click Here</a></li>
          <li>
            <span className='hints'>Description:</span>
            <span>

              <p>Chat Room was created just for learning process. It wasn't developed for the purpose of project building.I was trying to learn web socket(socket.io) and decided to learn by building, more features are yet to be published. Currently, a user can annonymously chat with individual or a group of individuals.</p>
            </span>
          </li>
          <li>
            <span className='hints'>Future Update:</span>
            <span>
              <ul>
                <li>Will be adding more features like creating and joining rooms</li>
                <li>Omegal like web app for chatting with an individual and moving to next when satisfied.</li>
              </ul>
            </span>
          </li>

        </ul>
      </div>
      <div className='project-container'>
        <h3><span className='line'>$</span>
          <span className='keyword'>cat</span>
          Anonymous Confession.txt
        </h3>
        <ul>
          <li><span className='hints'>Url:</span>
            <a href="https://anonymousconfession.netlify.app/" target='_blank'>Click Here</a></li>
          <li>
            <span className='hints'>Description:</span>
            <span>

              <p> Anonymous Confession was created during the early days of 1st semester and I had recently learned react and wanted to build a project. This was supposed to be the official confession page for our class or college,But couldn't succeed :(. <br /><br /><span className='visitor-name'>{visitorName}</span>, will you be my valentine?  </p>
              <p>You can write such confession.
                <br /> Btw why did you say yes?</p>
            </span>
          </li>
          <li>
            <span className='hints'>Tech Used:</span>
            <span>

              <p> React | Firebase</p>
            </span>
          </li>
        </ul>
      </div>
      <div className="project-container">
        <h3><span className='line'>$</span>
          <span className='keyword'>cat</span>
          Complaint Management System.txt
        </h3>
        <ul>
          <li><span className='hints'>Url:</span>
            Not yet Hosted.</li>
          <li>
            <span className='hints'>Description:</span>
            <span>

              <p> This is the full stack project that i am Currently developing.This projects helps to efficiently manage and provide transparency regarding actions taken.This projects aims to provide a solutions for handling complain for the colleges and school. <br />
                <span className='visitor-name'>{visitorName}</span>, I am planning to give this project to my college along with few complains.   </p>
            </span>
          </li>
          <li>
            <span className='hints'>Tech Used:</span>
            <span>

              <p> React | Nodejs | Expressjs | Mongodb | Mongoose</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Project