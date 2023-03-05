import React, {createContext, useContext} from "react";
import "./style.css";

const themeContext = createContext({border: "5px solid blue", margin: "10px"});

export default function App() {
  return (
    <div>
      <themeContext.Provider value={{border: "5px solid blue", margin: "10px"}}>
        <Sub1/>
      </themeContext.Provider>
    </div>
  );
}

const Sub1 = () => {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      Sub1
      <Sub2/>
    </div>
  )
}

const Sub2 = () => {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{border: "5px solid red", margin: "10px"}}>
    <div style={theme}>
      Sub2
      <Sub3/>
    </div>
    </themeContext.Provider>
  )
}


const Sub3 = () => {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      Sub3
    </div>
  )
}