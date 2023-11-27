//create an app function, place javascript code needed to create a simple gui with the following elements
//A title, a text input to enter the URL of the image to be analyzed or the prompt of the image to generate
//a button to trigger the image analysis and one to trigger image generation

import React, { useState } from 'react';
import { analyzeImage } from './openai-image-analysis';

function App() {
  const [imageURL, setImageURL] = useState('');
  const [output, setOutput] = useState('');

  const handleAnalyzeClick = async () => {
    const response = await analyzeImage(imageURL);
    setOutput(JSON.stringify(response, null, 2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analysis and Generation</h1>
      </header>
      <div className="App-content">
        <div className="App-input">
          <p>Input</p>
          <input 
            type="text" 
            id="imageURL" 
            name="imageURL" 
            placeholder="Image URL" 
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button id="analyze" name="analyze" onClick={handleAnalyzeClick}>Analyze</button>
          <button id="generate" name="generate">Generate</button>
        </div>
        <div className="App-output">
          <p>Output</p>
          <div id="output" style={{ whiteSpace: 'pre-wrap' }}>{output}</div>
        </div>
      </div>
    </div>
  );
}

export default App;


// test
//https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gatos.jpg/79px-Gatos.jpg