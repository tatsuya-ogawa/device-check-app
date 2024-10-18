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
  const [userAgentData, ] = React.useState((navigator as any | undefined)?.userAgentData?.toJSON() || {});
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>userAgent</td>
          <td>{userAgent}</td>
        </tr>
        <tr>
          <td>userAgentData</td>
          <td>{JSON.stringify(userAgentData)}</td>
        </tr>
        <tr>
          <td>(any-hover:hover)</td>
          <td>{anyHover.matches ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <td>(hover:hover)</td>
          <td>{hover.matches ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <td>(pointer:coarse)</td>
          <td>{pointer.matches ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <td>(pointer:fine)</td>
          <td>{pointerFine.matches ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <td>maxTouchPoints</td>
          <td>{maxTouchPoints}</td>
        </tr>
        <tr>
          <td>ontouchstart</td>
          <td>{onTouchStart ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <td>orientation</td>
          <td>{orientation ? 'true' : 'false'}</td>
        </tr> 
        </tbody>       
      </table>
      <div>
        <div>Get as a text</div>
        <textarea readOnly={true} value={
          `userAgent: ${userAgent}\n` +
          `userAgentData: ${JSON.stringify(userAgentData)}\n` +
          `(any-hover:hover): ${anyHover.matches}\n` +
          `(hover:hover): ${hover.matches}\n` +
          `(pointer:coarse): ${pointer.matches}\n` +
          `(pointer:fine): ${pointerFine.matches}\n` +
          `maxTouchPoints: ${maxTouchPoints}\n` +
          `ontouchstart: ${onTouchStart}\n` +
          `orientation: ${orientation}\n`
        }>
        </textarea>
      </div>
    </div>
  );
}

export default App;
