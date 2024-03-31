import React from 'react';

function ShareOnFacebook() {
  const handleShare = () => {
    // Open Facebook sharing dialog in a separate window
    const shareUrl = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
    );
  };

  return (
    <button onClick={handleShare}>Share on Facebook</button>
  );
}

export default ShareOnFacebook;