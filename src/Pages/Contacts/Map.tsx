import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Map() {
  return (
    <MapContainer center={[40.72026058201408, -73.95608316026275]} zoom={15.5}>
      <TileLayer
      attribution=''
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.72026058201408, -73.95608316026275]}>
      <Popup>
        Our store is here!
      </Popup>
    </Marker>
    </MapContainer>
  )
}
