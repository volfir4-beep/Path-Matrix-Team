import MapPanel from "../components/MapPanel";

function Sightseeing() {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <button className="upload-btn">
          Upload Test Case (JSON)
        </button>

        <h3>Source Location</h3>
        <input
          type="text"
          placeholder="Enter starting point..."
        />

        <h3>Destination Location</h3>
        <input
          type="text"
          placeholder="Enter final destination..."
        />

        <h3>Distance Budget (km)</h3>
        <input type="range" />

        <h3>Category Threshold (n)</h3>
        <input type="range" />

        <div className="requests">
          <p>
            <input type="checkbox" checked readOnly />
            Sunset Valley Viewpoint
          </p>

          <p>
            <input type="checkbox" />
            Grand Heritage Palace
          </p>

          <p>
            <input type="checkbox" checked readOnly />
            Downtown Spice Market
          </p>

          <p>
            <input type="checkbox" />
            Botanical Gardens
          </p>
        </div>
      </div>

      <div className="map-wrapper">
        <MapPanel />

        <div className="stats-card">
          <span>Total Distance: 39 km</span>
          <span>Effective Score: 17.303</span>
        </div>
      </div>
    </div>
  );
}

export default Sightseeing;