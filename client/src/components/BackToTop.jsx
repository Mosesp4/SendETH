import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          type="button"
          className="fixed bottom-0 right-0 m-4 p-1 rounded-lg bg-red-900 text-white hover:bg-red-600 hover:shadow-md"
          onClick={handleClick}
        >
          Top
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
