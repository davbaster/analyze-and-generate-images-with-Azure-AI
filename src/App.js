import React from 'react';

//create an app function, place javascript code needed to create a simple gui with the following elements
//A title, a text input to enter the URL of the image to be analyzed or the prompt of the image to generate
//a button to trigger the image analysis and one to trigger image generation

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analysis and Generation</h1>
      </header>
      <body>
        <div className="App-content">
          <div className="App-input">
            <p>Input</p>
            <input type="text" id="imageURL" name="imageURL" placeholder="Image URL" />
            <button id="analyze" name="analyze">Analyze</button>
            <button id="generate" name="generate">Generate</button>
          </div>
          <div className="App-output">
            <p>Output</p>
            <div id="output"></div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
