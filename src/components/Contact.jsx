import { useContext } from 'react'
import visitorNameContext from '../context/nameContext'
const Contact = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  return (
    <>
      <div>

        <div className='greeting'>
          <p>
            <span className='line'>$</span>
            <span className='visitor-name'>{visitorName},</span>
            Thank you for taking the time to reach out.
          </p>
          <p>
            <span className='line'>$</span>
            I appreciate your interest and look forward to connecting with you.
          </p>
        </div>
        <div>
          <p><span className='line'>$</span>
            <span className="keyword">cat</span>
            contact.txt
          </p>
          <ul>
            <li>
              <span className='hints'>Github:</span>
              <a href="https://github.com/CodeSShuv" target='_blank'>Click Here</a>
            </li>
            <li>
              <span className='hints'>Linkdin:</span>
              <a href="https://www.linkedin.com/in/shuvam-gautam-b88871263/" target='_blank'>Click Here</a>
            </li>
            <li>
              <span className='hints'>Email:</span>
              <a href="mailto:codesshuv@gmail.com" target='_blank'>codesshuv@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact