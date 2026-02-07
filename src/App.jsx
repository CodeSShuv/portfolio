import { Routes, Route, useNavigate } from "react-router-dom"
import { useContext, useEffect } from 'react';
import "./App.css"
import Landing from "./pages/Landing"
import NavigationPage from "./pages/NavigationPage.jsx"
import visitorNameContext from "./context/nameContext.jsx"
const App = () => {

  const { visitorName, setVisitorName } = useContext(visitorNameContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (visitorName === null) {
      navigate('/');
    }

  }, [visitorName])
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Landing />} />
        {visitorName && <Route path="/nav" element={<NavigationPage />} />}
      </Routes>


    </div>
  )
}

export default App