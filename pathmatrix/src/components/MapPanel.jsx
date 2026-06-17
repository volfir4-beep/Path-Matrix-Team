import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapPanel() {
  return (
    <MapContainer
      center={[15.4589, 75.0078]}
      zoom={13}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapPanel;