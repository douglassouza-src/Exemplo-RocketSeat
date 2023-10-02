import React, { useState, useEffect } from 'react';
import './assets/main.css';
import azionLogo from './assets/azion.svg';

function App() {
  const [typedText, setTypedText] = useState('');
  const finalText = "No oceano de informações, a pérola do insight está mais próxima do que você pensa.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= finalText.length) {
        setTypedText(finalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <div className="header">
        <img src={azionLogo} alt="logo Azion" width="100" height="24" className="logo-left" />
      </div>
      <div className="content">
        <h1>{typedText}</h1>
      </div>
      <div>
        <h3>Seja muito bem-vindo(a) ao Mundo da </h3>
      </div>

      <div className="footer">
        <a href="https://www.azion.com/en/documentation/" target="_blank" rel="noreferrer">
          <h1>Docs</h1>
          <p>
            Besides providing structure, it allows interactions to occur with the surface of the element, thus enabling it to have states.
          </p>
        </a>
        <a href="https://medium.com/aziontech" target="_blank" rel="noreferrer">
          <div>
            <h1>Medium</h1>
            <p>
              Dive deep into our platform's use cases on Medium and join a community where developers connect, collaborate, and innovate.
            </p>
          </div>
        </a>
        <a href="https://twitter.com/aziontech" target="_blank" rel="noreferrer">
          <div>
            <h1>X (formerly Twitter)</h1>
            <p>Explore our features in-depth and find out what's new on our platform.</p>
          </div>
        </a>
        <a href="https://discord.gg/Yp9N7RMVZy" target="_blank" rel="noreferrer">
          <div>
            <h1>Discord</h1>
            <p>A space for developers to connect, get involved and collaborate.</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default App;
