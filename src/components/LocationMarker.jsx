import { Marker, Popup } from "react-leaflet"
import * as L from "leaflet";


const LeafIcon = L.Icon.extend({
  options: {}
});

const greenIcon = new LeafIcon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  
});

const LocationMarker = ({business}) => {
  const lat = business.adressesOperateurs[0].lat 
  const lng = business.adressesOperateurs[0].long

  return (
  <Marker position={[lat, lng]} icon={greenIcon}>
    <Popup>
      {business.raisonSociale ? <h1>{business.raisonSociale}</h1> : <h1>Empty</h1>}
      <hr />
      {business.adressesOperateurs[0].lieu ? <h2>{business.adressesOperateurs[0].lieu}</h2> : <h2>Non renseigné</h2> }
      <p>{business.adressesOperateurs[0].ville} | {business.adressesOperateurs[0].codePostal}</p>
    </Popup>
  </Marker>
  )
}

export default LocationMarker



