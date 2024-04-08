import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

function App() {
  const position = {lat: 61.2176, lng: -149.8997};

  return (
    <APIProvider apiKey={''}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}

export default App;