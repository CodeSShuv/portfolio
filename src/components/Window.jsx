
import { useState, useRef } from "react";
import "./css/window.css";
const Window = ({ title, children, closeWindow }) => {


  return (

    <>

      <div className="window" >
        <div className="title-panel">
          <div className="window-btns">
            <button className="close" onClick={closeWindow} id="close"></button>
            <button className="minimize" id={"minimize"}></button>
            <button className="maximize" id={"maximize"}></button>
          </div>
          <div className="title">
            {title}
          </div>
        </div>
        {/* ------- */}
        <div className="content-panel">
          {children}
        </div>


      </div>

    </>
    // </Draggable >
  )
}

export default Window