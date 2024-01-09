import React, { useState } from "react";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Cardwrapper>Hi there</Cardwrapper>
      <Cardwrapper>
        <div>Hello from 2nd Card</div>
      </Cardwrapper>
    </div>
  );
}

function Cardwrapper({ children }) {
  // console.log(ch);
  return (
    <div style={{ border: "2px solid red", padding: 10, margin: 10 }}>
      {children}
    </div>
  );
}

export default App;
