import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="path">PathMatrix</span>
        <span className="dashboard"> Dashboard</span>
      </div>

      <div className="tabs">

        <Link to="/">
          <button>Ride-Share</button>
        </Link>

        <Link to="/sightseeing">
          <button>Sightseeing</button>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;