import SidebarRideShare from "../components/SidebarRideShare";
import MapPanel from "../components/MapPanel";
import BottomStats from "../components/BottomStats";

function RideShare() {
  return (
    <div className="main-layout">
      <SidebarRideShare />

      <div className="map-wrapper">
        <MapPanel />
        <BottomStats />
      </div>
    </div>
  );
}

export default RideShare;