import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Typewriter from "typewriter-effect";
import img from "./assets/profileImage.jpg"
import "./App.css";
import Aboutme from './Components/Aboutme';
import Project from './Components/Project';
import Skills from './Components/Skills';

const App = () => {
const [toggler,setToggler] = useState<boolean>(true)
const toggle = ()=>{

 if(toggler){
  setToggler(false);
 }else{
  setToggler(true);
 }
}
  return (
    <>
    {/* <div className="title align-center flex justify-center">
      <h1 className="text-3xl">CodeSShuv.com</h1></div> */}
      <main className='rounded-2xl flex flex-col justify-center items-center shadow-xl overflow-hidden heropage'>

     
      <header className='w-250 p-8 flex justify-center items-center'>
        <div className="headerMain flex flex-col items-center content-center w-60">
          <div className="profilePic w-40 rounded-full overflow-hidden">
            <img className="pp w-40 object-cover" src={img} alt="" />
          </div>
          <div className="description text-2xl text-white">
           
              <Typewriter
                options={{  
                  strings: ['React Developer', 'Problem Solver',  'Tech Enthusiast','Full-Stack Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
           
          </div>
          <div className="socialsContainer p-2 flex gap-2">
            <a href="mailto:gautamshuvam97@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}size="2x" />
            </a>
         
            <a href="https://www.linkedin.com/in/shuvam-gautam-b88871263/" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin}size="2x" />
            </a>
            <a href="https://github.com/CodeSShuv" target="_blank">
            <FontAwesomeIcon icon={faGithub}size="2x" />
            </a>
          </div>
        </div>

      </header>
      <Aboutme/>
      <div className="toggleBtnContainer p-3 flex justify-center items-center gap-2 bg-yellow-50 w-full">
        <button className={`btn `+`${toggler?"btn-secondary":"btn-light"}`} disabled={toggler} name='project' onClick={toggle}>Projects</button>
        <button className={`btn `+`${!toggler?"btn-secondary":"btn-light"}`} disabled={!toggler}name='skill'onClick={toggle}>Skills</button>
      </div>
     
      {toggler?<Skills/>:<Project/>}
      {/* <footer className='flex justify-center items-center bg-indigo-50 w-full p-5'>

      <Contact/>
      </footer> */}
      
      </main>
    </>
  )
}

export default App