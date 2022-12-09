import Map from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

const MapGeo = ({ searchResults }) => {
  const coordinates = searchResults.map((data) => ({
    longitude: data.long,
    latitude: data.lat
  }))

  const center = getCenter(coordinates)

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 7,
      }}
      style={{width: 1250, height: 1080}}
      mapStyle = "mapbox://styles/nishanthmessi/clbf0tkny000j14oz0mtoc7no"
      mapboxAccessToken = {process.env.MAP_TOKEN}
      >
    </Map>
  )
}

export default MapGeo