import { MapContainer, TileLayer} from "react-leaflet"
import LocationMarker from "./LocationMarker"
const Map = ({center, zoom, data}) => {

  const markers = data.map((business, index) => {
    if (business.adressesOperateurs != null){
      return <LocationMarker key={index} business={business} />
    }
      return null
  })

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     
     {markers}

  </MapContainer>
  )
}



Map.defaultProps = {
  center: {
    lat: 49.73605883347637,
    lng: 0.9751778273147192,  
  },
  zoom: 9
}

export default Map
