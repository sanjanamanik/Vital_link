import CycleTracker from '../components/CycleTracker';
import CancerGuidance from '../components/CancerGuidance';
import ChatWindow from '../components/ChatWindow';
import AIChatbot from '../components/AIChatbot';

function Dashboard() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <CycleTracker />
      <CancerGuidance />
      <ChatWindow />
      <AIChatbot />
    </div>
  );
}

export default Dashboard;