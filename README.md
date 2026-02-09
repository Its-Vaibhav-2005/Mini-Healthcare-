# Mini Healthcar

This is a mini healthcare support system with a layered backend architecture and modular frontend. It includes an automation feature that generates an AI-style summary of patient issues.

Currently, the AI logic is rule-based, but the service layer is designed so it can be replaced by an LLM or NLP model without changing controllers or routes.

## Backend
Inside backend directory: 
```
backend/
│── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── app.js
│   └── server.js
│── package.json
```
Purpose:
- `controllers :` HTTP layer
- `services :` business / AI logic
- `repositories :` data access
- `routes :` API routes
- `app.js :` application config 
- `server.js :` application bootstrap

## Frontend 


