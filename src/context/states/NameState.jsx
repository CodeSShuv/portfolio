import { useState } from "react";
import visitorNameContext from "../nameContext";
const NameState = ({ children }) => {
  const [visitorName, setVisitorName] = useState(() => null);

  return (
    <visitorNameContext.Provider value={{ visitorName, setVisitorName }}>
      {children}
    </visitorNameContext.Provider>
  )
}

export default NameState;