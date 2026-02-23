const { HfInference } = require('@huggingface/inference');
const config = require('./config');
const intents = require('./intents.json');

const inference = new HfInference(config.HUGGINGFACE_API_KEY);

async function getResponse(query) {
  // Simple fallback to intents; integrate full NLP
  for (let intent of intents.intents) {
    if (intent.patterns.some(p => query.toLowerCase().includes(p))) {
      return intent.responses[0];
    }
  }
  
  // Hugging Face example (use a conversational model)
  const response = await inference.conversation({
    model: 'facebook/blenderbot-400M-distill',
    inputs: { text: query },
  });
  return response.generated_text || 'Sorry, I don\'t understand.';
}

module.exports = { getResponse };