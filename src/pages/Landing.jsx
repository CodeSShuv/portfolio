import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import visitorNameContext from '../context/nameContext'
import NameCapture from '../components/NameCapture'

import "./css/landing.css"
const Landing = () => {
  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  const [inputValue, setInputValue] = useState("");
  const [msg, setMsg] = useState([])
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleKeyPress = (e) => {
    inputValue.toLowerCase()
    if (e.code === "Enter") {

      if (inputValue === "y") {
        setMsg([])
        setInputValue("");
        navigate('/nav')
      } else if (inputValue === "n") {
        setVisitorName(null);
        setMsg([])
        setInputValue("")
      } else {
        console.log(inputValue)
        setMsg([...msg, inputValue + " : Command Not Found."])
      }
    }
  }

  return (
    <div className='landing-page w-100'>
      <ul className='custom-list'>
        <li>

          <NameCapture />
        </li>
        {
          visitorName != null ? (

            <li> Hi! <span className='visitor-name'>{visitorName}</span> , Are you sure you want me to call you that?</li>
          ) : ""
        }
        {
          visitorName != null ? (

            <li> <input type="text" autoFocus={true} placeholder='y for yes, n for no' onChange={handleChange} value={inputValue} onKeyDown={handleKeyPress} /></li>
          ) : ""
        }
      </ul>
      <ul className='custom-list'>
        {msg.map((value) => {
          return <li>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default Landing