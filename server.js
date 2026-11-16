const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic GET endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Test app is running!', timestamp: new Date().toISOString() });
});

// Echo endpoint - returns what you send
app.post('/echo', (req, res) => {
  res.json({ echo: req.body });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

// Query params test
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  const { lang = 'en' } = req.query;

  const greetings = {
    en: `Hello, ${name}!`,
    es: `¡Hola, ${name}!`,
    fr: `Bonjour, ${name}!`
  };

  res.json({ greeting: greetings[lang] || greetings.en });
});

app.listen(port, () => {
  console.log(`Test server running on http://localhost:${port}`);
  console.log('\nAvailable endpoints:');
  console.log('  GET  /              - Basic info');
  console.log('  GET  /health        - Health check');
  console.log('  GET  /greet/:name   - Greeting (optional ?lang=en|es|fr)');
  console.log('  POST /echo          - Echo JSON body');
});
