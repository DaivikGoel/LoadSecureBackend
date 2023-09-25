const express = require('express');
const router = express.Router();
const axios = require('axios');
const OpenAI = require('openai');

router.post('/', async (req, res) => {
  try {
    const email = req.body.email;

    // Initialize the OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create a message for the OpenAI model
    const messages = [
      {
        role: 'system',
        content:
          'You will be provided with unstructured data, and your task is to parse it to get the loadid, money from the email. If there are any questions or information you should outline that too. The format should be a JSON file with {ID:, bid:, question:, importantinfo: }',
      },
      {
        role: 'user',
        content: email,
      },
    ];

    // Make a request to the GPT-3.5 Turbo model
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Extract the outlined information from the response
    const outlinedInfo = response.data.choices[0].message.content;

    // You can do further processing with the outlinedInfo if needed

    res.json({ outlinedInfo });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the email.' });
  }
});

module.exports = router;
