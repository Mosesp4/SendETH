import React, { useState } from 'react';

const News = () => {
  const [showWarning, setShowWarning] = useState(false);
  const handleClick = () => {
    setShowWarning(true);
  }
  const continueToLink = () => {
    window.location.href = 'https://cointelegraph.com/';
  }

  return (
    <>
    {showWarning ? (
      <div>
        <p>You are about to leave our app and visit a external website, are you sure you want to proceed?</p>
        <button onClick={continueToLink}>Yes</button>
        <button onClick={() => setShowWarning(false)}>No</button>
      </div>
    ) : (
      <a href="#" onClick={handleClick}>News</a>
    )}
    </>
  )
}

export default News;
