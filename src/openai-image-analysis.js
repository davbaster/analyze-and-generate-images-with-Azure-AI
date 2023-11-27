/*PROMPT:
openai image analysis. I have a very basic react web page, it has a text input, and div with className called "app-out". 
 I'm creating a javascript module called openai-image-analysis.js , this module must have a function called "analyzeImage" . This function needs to use open-ai image recognition service, see documentation here https://platform.openai.com/docs/guides/vision 
The function needs to take the url given in the App.js file, then read the image from the url, and then  return the JSON response of the API.
The api key should not be writen in the code, it needs to be read it from a file called .env inside the main folder called web_app_ai_az , the file "openai-image-analysis.js" is located at web_app_ai_az/src
*/


async function analyzeImage(imageUrl) {
    const openAIKey = process.env.REACT_APP_OPENAI_KEY;
  
    try {
      const response = await fetch('https://api.openai.com/v1/images/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIKey}`
        },
        body: JSON.stringify({
          model: "gpt-4-vision-preview",
          messages: [
            {
              "role": "user",
              "content": [
                {"type": "text", "text": "What’s in this image?"},
                {"type": "image_url", "image_url": {"url": imageUrl}}
              ]
            }
          ],
          max_tokens: 300
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.error("Error in fetching: ", error);
      throw error; // rethrow the error for further handling
    }
  }
  
  
