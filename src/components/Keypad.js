// Code Keypad Component Here
import React, { useState } from "react";

function Keypad() {
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setPassword(e.target.value);
    console.log("Entering password...");
  }

  return (
    <input
      type="password"
      value={password}
      onChange={handleChange}
      placeholder="Enter password"
    />
  );
}

export default Keypad;
