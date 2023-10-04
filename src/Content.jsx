import React, { useState, useEffect } from 'react';

function Content() {
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
    <div className="content">
      <h1>{typedText}</h1>
    </div>
  );
}

export default Content;
