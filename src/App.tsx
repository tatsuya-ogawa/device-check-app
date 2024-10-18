import React from 'react';
import './App.css';

function App() {
  const [anyHover, ] = React.useState(window.matchMedia('(any-hover:hover)'));
  const [hover, ] = React.useState(window.matchMedia('(hover:hover)'));
  const [pointer, ] = React.useState(window.matchMedia('(pointer:coarse)'));
  const [pointerFine, ] = React.useState(window.matchMedia('(pointer:fine)'));
  const [maxTouchPoints, ] = React.useState(navigator.maxTouchPoints);
  const [onTouchStart, ] = React.useState('ontouchstart' in window);
  const [orientation, ] = React.useState('orientation' in window);
  const [userAgent, ] = React.useState(navigator.userAgent);
  return (
    <div className="App">
      <div>
        <div>userAgent : </div>
        <div>{userAgent}</div>
      </div>
      <div>
        <div>(any-hover:hover) : </div>
        <div>{anyHover.matches ? 'true' : 'false'}</div>
      </div>
      <div>
        <div>(hover:hover) : </div>
        <div>{hover.matches ? 'true' : 'false'}</div>
      </div>
      <div>
        <div>(pointer:coarse) : </div>
        <div>{pointer.matches ? 'true' : 'false'}</div>
      </div>
      <div>
        <div>(pointer:fine) : </div>
        <div>{pointerFine.matches ? 'true' : 'false'}</div>
      </div>
      <div>
        <div>maxTouchPoints : </div>
        <div>{maxTouchPoints}</div>
      </div>
      <div>
        <div>ontouchstart : </div>
        <div>{onTouchStart ? 'true' : 'false'}</div>
      </div>
      <div>
        <div>orientation : </div>
        <div>{orientation ? 'true' : 'false'}</div>
      </div>
    </div>
  );
}

export default App;
