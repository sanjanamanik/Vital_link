import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function SOSButton() {
  const handleSOS = () => {
    socket.emit('sos', { userId: 'user_id', location: 'location_data' });
    alert('SOS Alert Sent!');
  };

  return (
    <button onClick={handleSOS} className="bg-red-500 text-white p-4 rounded-full">
      SOS
    </button>
  );
}

export default SOSButton;