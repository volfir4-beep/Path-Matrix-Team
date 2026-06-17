function SidebarRideShare() {
  return (
    <div className="sidebar">

      <button className="upload-btn">
        Upload Test Case (JSON)
      </button>

      <h3>Pickup Point</h3>
      <input
        type="text"
        placeholder="Enter pickup point..."
      />

      <h3>Drop-off Point</h3>
      <input
        type="text"
        placeholder="Enter drop-off point..."
      />

      <h3>Vehicle Capacity</h3>
      <input type="range" />

      <h3>Wait Time Tolerance</h3>
      <input type="range" />

      <div className="requests">
        <p><input type="checkbox" checked readOnly /> Request 1</p>
        <p><input type="checkbox" /> Request 2</p>
        <p><input type="checkbox" /> Request 3</p>
        <p><input type="checkbox" /> Request 4</p>
      </div>

    </div>
  );
}

export default SidebarRideShare;