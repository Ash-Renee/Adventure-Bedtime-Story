import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

<body onload="initNovel(800, 600);">
  <div id="novelDiv">
      <div style="position: absolute;
          left:0; top: 0; z-index:-1">
          <img id="background0" src="images/empty.png">
            </img>
      </div>
      <div style="position: absolute;
          left:0; top: 0; z-index:-1">
          <img id="background1" src="images/empty.png">
            </img>
      </div>
      <div id="dialogDiv" style="z-index:100">
      </div>
  </div>
  <div style="text-align:center; margin-top: 0.5em;">
  <input type="button" value="Back to Beginning"
      onclick="initNovel(800, 450)"/>
  </div>
</body>

{/* In the <body> of the document, you set up the tableau and dialog areas, as well as an area for the background image of the tableau. From a conceptual level, a visual novel takes place in two screen areas: the tableau, where all the images appear, and the dialog area, where the characters’ speech appears.
Line 1
When the document finishes loading, initialize the novel. The numbers in the parentheses give the width and height of the tableau in pixels. In this example, the tableau is 800 pixels wide and 450 pixels high.
Line 2
This is the tableau. Its id must be "novelDiv".
Lines 3-4
In order to allow background images to fade in or out, you must include this <div> The position, left, and top make the background image appear at the upper left of the tableau; the z-index: -1 ensures that the background image appears behind the characters.
Line 5
The first background image must have an id="background0". In this case, the initial background is a totally transparent image.
Lines 7-10
The second backgound image; this is required in order to allow a dissolve, where one image fades in as the other fades out.
Lines 11-12
This is the dialog area, whose id must be "dialogDiv". If your <div id="dialogDiv"> is inside the <div id="novelDiv"> (as it is in the sample novel, “The Question”), you must add style="z-index:100" to the dialogDiv to ensure that the dialog always appears above the characters.
Lines 14-17
These are optional. It’s just a good idea to allow readers to restart the novel. The onclick re-initializes the novel, just as you did in line 1.*/}