import React from 'react'

export default ({ children }) =>
  <React.Fragment>
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'black'
    }}>
    {children}
  </div>
  <div 
  style={{
    width: '100%',
    height: '10%',
    backgroundColor: 'tomato'
  }}
  >
    <p>@farminfarzin</p>
  </div>
  </React.Fragment>