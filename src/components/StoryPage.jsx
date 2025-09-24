import React from 'react';
import './StoryPage.css';

function StoryPage({ title, text, image, video, choices, onChoice }) {
  return (
    <div className="story-page">
      <h1>{title}</h1>
      <p>{text}</p>
      {image && <img src={image} alt="story" className="story-image" />}
      {video && (
        <video controls className="story-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="choices">
        {choices.map((choice, idx) => (
          <button key={idx} onClick={() => onChoice(choice.next)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StoryPage;
