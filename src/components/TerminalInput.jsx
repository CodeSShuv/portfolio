import { useContext, useState } from 'react'
// import visitorNameContext from '../context/nameContext'
import "./css/namecapture.css"




const TerminalInput = ({command, setCommand,directory}) => {

  const [inputCommand, setInputCommand] = useState("");

  const handleKeyPress = (e) => {
    
    if (e.code === "Enter") {
      setCommand(inputCommand);
      setInputCommand("");
    }
  }
  const handleChange = (e) => {
    setInputCommand(e.target.value);
  }
  return (
    <div className="terminal-input-box">
      <span className="">
        <span className="root-name">root</span><span className="directory-name">{directory === "root"?"":"/"+directory}</span><span>$</span></span>
      <input
        type="text"
        placeholder="type 'commands' to view all available commands"
        autoFocus={true}
        onKeyUp={handleKeyPress}
        // disabled={visitorName === null ? false : true}
        onChange={handleChange}
        value={inputCommand}
      />
    </div>

  )
}

export default TerminalInput