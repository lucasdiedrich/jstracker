import './canvas.module.scss';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

/* eslint-disable-next-line */
export interface CanvasProps {}

export function Canvas(props: CanvasProps) {
  return (
    <div className="map_canvas">
        <LoadScript
          googleMapsApiKey={`${process.env['NX_GOOGLE_MAPS_API_KEY'] || ''}`}
        >
          <GoogleMap mapContainerStyle={containerStyle} center={center}>
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
  );
}

export default Canvas;
