import React from "react"
import daImage from "./images/da-red.png"


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
        color: "#00ACEE",
        alignSelf: "center",
      }}
      >@farminfarzin</p>
      <p
       style={{
        alignSelf: "center",
       }}>Farmin Farzin</p>
      <div
        style={{
        }}>
        <img src={daImage} width="200px" height="146px" style={{
          justifySelf: "end"
        }}/>
      </div>
      

    </div>
  </div>
)