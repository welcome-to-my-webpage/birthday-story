import React, { useState } from 'react';
import StoryPage from './components/StoryPage';
import './App.css';

const story = [
  {
    title: "Happy 23rd Birthday!",
    text: "Once upon a time, there was a wonderful person who turned 23 today...",
    image: "/images/birthday1.jpg",
    video: null,
    choices: [
      { text: "Next", next: 1 }
    ]
  },
  {
    title: "A Journey Together",
    text: "From best friends to something even more special, every moment has been an adventure.",
    image: "/images/friends.jpg",
    video: "/videos/memory1.mp4",
    choices: [
      { text: "See a surprise!", next: 2 }
    ]
  },
  {
    title: "Your Special Day",
    text: "Wishing you all the happiness in the world. Click below for a message!",
    image: null,
    video: "/videos/birthday-message.mp4",
    choices: [
      { text: "Start Over", next: 0 }
    ]
  }
];

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="app-container">
      <StoryPage {...story[page]} onChoice={setPage} />
    </div>
  );
}

export default App;
