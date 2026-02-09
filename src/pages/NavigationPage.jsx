import "./css/navigationpage.css";
import visitorNameContext from '../context/nameContext';
import { useContext } from 'react';
import { useState } from "react";
import Window from "../components/Window.jsx"
import About from "../components/About.jsx";
import Skill from "../components/Skill.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
const NavigationPage = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);

  const [selected, setSelected] = useState(null);
  const handleSelection = (e) => {

    setSelected(e.target.innerText)
  }
  const closeWindow = () => {
    setSelected(null)
  }
  return (
    <>
      <div className="navigation-page">
        <div className="heading">
          <p> <span className='visitor-name'>{visitorName},</span> What would you like to view? </p>
          <nav>
            <ul className='nav-links'>
              {/* <div className="nav-pointer"></div> */}
              <li onClick={handleSelection}>

                About Me
              </li>
              <li onClick={handleSelection}>
                Skills</li>
              <li onClick={handleSelection}>
                Projects</li>
              <li onClick={handleSelection}>
                Contact</li>
            </ul>
          </nav>
        </div>
        {selected === "About Me" ? <Window closeWindow={closeWindow} title={"About me"} >
          <About />
        </Window> : (selected === "Skills" ? <Window closeWindow={closeWindow} title={"Skills"}>
          <Skill />
        </Window> : (selected === "Projects" ? <Window closeWindow={closeWindow} title={"Projects"}>
          <Project />
        </Window> : (selected === "Contact" ? < Window closeWindow={closeWindow} title={"Contact me"}>
          <Contact /></Window> : "")))}
      </div >
    </>
  )
}

export default NavigationPage