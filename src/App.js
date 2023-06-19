import React from 'react';
import './App.css';
import Tags from './components/tag/Tags'
import Timer from './components/timer/Timer'

function App() {
  return (
    <>
    <h1 className="title"> My Timer Totodoro</h1>
    <Tags />
    <Timer />
    <div className="spotify_player">
      <iframe
        src="https://open.spotify.com/embed/playlist/7E1JPgviV96g5jQ649214c?utm_source=generator" width="25%"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>


    </>

  );
}

export default App;
