import { Routes, Route, useNavigate } from "react-router-dom"
import { useContext, useEffect } from 'react';
import "./App.css"
// import Terminal from "./pages/Landing"
import NavigationPage from "./pages/NavigationPage.jsx"
import visitorNameContext from "./context/nameContext.jsx"
import Terminal from './pages/Terminal';
const App = () => {


  const navigate = useNavigate();
 
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Terminal />} />
        {/* {visitorName && <Route path="/nav" element={<NavigationPage />} />} */}
      </Routes>


    </div>
  )
}

export default App