import React from "react"
import daImage from "./images/da-icon.png"


export default ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "100%",
      gridTemplateRows: "100% 20%",
      backgroundColor: "Black"
    }}>
    {children}
    <div 
    style={{
      display: "grid",
      gridTemplateColumns: "33% 33% 33%"
    }}>
      
      <p
       style={{
        color: "#00ACEE"
      }}
      >@farminfarzin</p>
      <p>Farmin Farzin</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%"
        }}>
        <img src={daImage} width="80px" height="80px" style={{
          justifySelf: "end"
        }}/>
        <p
          style={{
            color: "red"
          }}
        >Digital Attitude</p>
      </div>
      

    </div>
  </div>
)