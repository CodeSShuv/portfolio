import React,{ useEffect, useRef, useState } from 'react'
// import visitorNameContext from '../context/nameContext'

import "./css/landing.css"
import TerminalInput from '../components/TerminalInput';
import About from "../components/About"
import Skills from '../components/Skill';

const DEFAULT_KEYWORDS = {
  "cd" : "cd <component you want to view>",
  "ls"  : "list all the components.",
  "commands" : "view all necessary commands",
  "pages" :"list all the necessary pages/components"
}
const DEFAULT_COMMANDS = Object.keys(DEFAULT_KEYWORDS);

const Terminal = () => {

  const [commandDetail, setCommandDetail] = useState([]);
  const [directory, setDirectory ] = useState("root");
  const [command, setCommand] = useState("");
  const [lines , setLines ] = useState([]);
  const [msg, setMsg] = useState([]);
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [lines, msg]);

  useEffect(()=>{
    if (command.length === 0) return 
    let lineModel = {
      id:crypto.randomUUID(),
      directory: directory =="root"?directory: `root/${directory}`,
      command:command.split(" ")[0],
      text: command.split(" ").slice(1,command.length)[0]
    }
    // console.log()
    setLines(prev=>[...prev, lineModel]);
    setCommand("")
    
      if (lineModel.command === "cd") {
      if(lineModel.text === directory) return 
      if (lineModel.text === "../") {
        setDirectory("root");
      } else if (lineModel.text.toLowerCase() === "about") {
        setDirectory("about");
      }else if (lineModel.text.toLowerCase() === "skill") {
        setDirectory("skill");
      }
  }else if(lineModel.command === 'clear'){
    setCommand([])
    setLines([])

  }
    

   
   
  }, [command])

  return (
    <div className='landing-page w-100' ref={terminalRef}>
      <ul className='custom-list'>
        {lines?.map((line, index) => {
 console.log(lines)
          
  return (
    <React.Fragment key={index}>
      {/* User's entered command */}
      <li>
        <span className="root-name">{line.directory.split('/')[0]}/<span className="directory-name">{line.directory.split("/")[1]}</span></span>$
        {" "}
     
        <span className="main-command">{line.command}</span>{" "}
        {line.text}
      </li>

      {/* Command output */}
      <li>
        {line.command === "ls" ? (
          <div>
            Available components:
            {line.directory === 'root'? ( <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>):("No components available. Go back to root to choose component. Use 'cd ../'")}
           
          </div>
        ) : line.command === "commands" ? (
          <div>
            Available commands:
            <ul>
              <li><span className="main-command">ls</span>  list components</li>
              <li><span className="main-command">cd</span>  navigate to a component</li>
              <li><span className="main-command">pages</span>  list available pages</li>
              <li><span className="main-command">commands</span>  view all necessary commands</li>
              <li><span className="main-command">clear</span>  clear all</li>
              
            </ul>
          </div>
        ) : line.command === "cd"? (
          <></>
        ):(directory === "about" && line.command === "show")?<About/>:directory === "skill" && line.command === "show" ? (<Skills></Skills>):<></>
        }
      </li>
    </React.Fragment>
  );
})}
        <li>

          <TerminalInput 
          command = {command}
          setCommand = {setCommand}
          directory = {directory}

           />
        </li>
       
      </ul>
      <ul className='custom-list'>
        {msg.map((value) => {
          return <li>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default Terminal