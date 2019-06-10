import React from "react"
import daImage from "./da-icon.png"


export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: "Black"
    }}>
    {children}
    <div 
    style={{
      display: "grid",
      gridTemplateColumns: "33% 33% 33%"
    }}>
      
      <p>Farmin Farzin</p>
      <p>@farminfarzin</p>
      <img src={daImage} width="100px" height="100px"></img>

    </div>
  </div>
)