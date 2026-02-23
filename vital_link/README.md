# Vital Link

A health platform for menstrual tracking, cancer guidance, emergency SOS, anonymous chat, and AI assistant.

## Features
- Responsive React frontend.
- Secure Node.js backend with JWT.
- Real-time with Socket.io.
- AI chatbot for health queries.

## Setup
1. Clone repo.
2. Install deps in frontend/backend/ai-assistant.
3. Set .env in backend: MONGO_URI, JWT_SECRET.
4. Run backend: `cd backend && npm start`.
5. Run frontend: `cd frontend && npm start`.

## Security Notes
- Passwords hashed with bcrypt.
- Sensitive data encrypted (expand as needed).