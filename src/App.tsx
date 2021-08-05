import './App.css';

import React, { useState } from 'react';

import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("Hola");

  return (
    <>
      <input type="text" onChange={e => setText(e.target.value)}></input>
      <QRCode value={text} size={256}/>
    </>
  );
}

export default App;
