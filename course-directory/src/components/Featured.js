import React from 'react';

const Featured = ( {match} ) => {
  let name = match.params.name;
  let topic = match.params.topic
  return (
    <div className="main-content">
      <p><strong>Thank you</strong>, for suggesting {topic}!</p>
    </div>
  );
}

export default Featured;