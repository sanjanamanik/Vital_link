import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/dashboard" className="font-bold">Vital Link</Link>
        <div>
          <Link to="/dashboard" className="mx-2">Dashboard</Link>
          <Link to="/emergency" className="mx-2">Emergency</Link>
          {/* Add more links */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;