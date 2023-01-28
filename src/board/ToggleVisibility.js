import React, { useState } from "react";

export default function ToggleVisibility({ children }) {
  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  
  var buttonText = show ? "↑↑Hide DashBoard↑↑" : "↓↓Show DashBoard↓↓";

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow} className="dashbar">{buttonText}</button>
    </div>
  );
}
