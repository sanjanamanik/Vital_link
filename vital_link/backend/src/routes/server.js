const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/auth');
const cycleRoutes = require('./routes/cycle');
const cancerRoutes = require('./routes/cancer');
const sosRoutes = require('./routes/sos');
const chatRoutes = require('./routes/chat');
const http = require('http');
const { Server } = require('socket.io');
const setupSocket = require('./socket');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/cycle', cycleRoutes);
app.use('/api/cancer', cancerRoutes);
app.use('/api/sos', sosRoutes);
app.use('/api/chat', chatRoutes);

// AI route placeholder
app.post('/api/ai/query', (req, res) => {
  // Call ai-assistant/chatbot.js
  res.json({ response: 'AI response' });
});

setupSocket(io);

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));