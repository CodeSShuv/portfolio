import { useContext, useState } from 'react'
import visitorNameContext from '../context/nameContext'
import "./css/namecapture.css"


const NameCapture = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (e) => {
    console.log(e.code)
    if (e.code === "Enter") {
      setVisitorName(inputValue.trim());

    }
  }
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div className="name-capture-box">
      <input
        type="text"
        placeholder="What should I call you?"
        autoFocus={true}
        onKeyUp={handleKeyPress}
        disabled={visitorName === null ? false : true}
        onChange={handleChange}
      />
    </div>

  )
}

export default NameCapture