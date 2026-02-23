module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('chat', (data) => {
      io.emit('message', data.message);
    });

    socket.on('sos', (data) => {
      io.emit('sos_alert', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};