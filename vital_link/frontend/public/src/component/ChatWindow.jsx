import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => setMessages((prev) => [...prev, msg]));
  }, []);

  const sendMessage = () => {
    socket.emit('chat', { message: input });
    setInput('');
  };

  return (
    <div className="p-4 border">
      <div className="h-64 overflow-y-scroll">
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} className="border p-2" />
      <button onClick={sendMessage} className="bg-green-500 text-white p-2">Send</button>
    </div>
  );
}

export default ChatWindow;