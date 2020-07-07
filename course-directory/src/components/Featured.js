import React from 'react';

const Featured = ( {match} ) => {
  let topic = match.params.topic
  return (
    <div className="main-content">
      <p><strong>Thank you</strong>, for suggesting {topic}!</p>
    </div>
  );
}

export default Featured;