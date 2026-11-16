# Test Node.js App

Basic Express server for testing.

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

Or with auto-reload:

```bash
npm run dev
```

## Test Endpoints

```bash
# Basic info
curl http://localhost:3000/

# Health check
curl http://localhost:3000/health

# Greeting
curl http://localhost:3000/greet/Alice
curl http://localhost:3000/greet/Alice?lang=es

# Echo POST
curl -X POST http://localhost:3000/echo \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```
