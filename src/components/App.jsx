import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [hello, setHello] = useState();
  const [isMouseOver, setIsMouseOver] = useState();

  function mouseOver() {
    setIsMouseOver(true);
  }
  function mouseOut() {
    setIsMouseOver(false);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setHello(name);
  }

  return (
    <div className="container">
      <h1>Hello {hello}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
