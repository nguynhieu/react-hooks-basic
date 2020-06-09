import React, { useState } from 'react';
import './App.css';

function App() {
  const originalColor = localStorage.getItem('backgroundColor') || 'pink';
  const colorList = ['pink', 'blue', 'green', 'red'];
  const [backgroundColor, setColor] = useState(originalColor);

  function handleSetcolor() {
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    localStorage.setItem('backgroundColor', randomColor);
    const backgroundColor = localStorage.getItem('backgroundColor');
    setColor(backgroundColor);
  }

  return (
    <div className="app">
      <div onClick={() => handleSetcolor()} className="box" style={{ background: backgroundColor }}>

      </div>
    </div>
  );
}

export default App;
