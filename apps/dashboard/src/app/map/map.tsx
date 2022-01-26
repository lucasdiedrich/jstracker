import './map.module.scss';
import Form from 'react-bootstrap/esm/Form';
import Canvas from './canvas/canvas';
import Deviceinfo from './deviceinfo/deviceinfo';


/* eslint-disable-next-line */
export interface MapProps {}

export function Map(props: MapProps) {
  return (
    <div className="wrapper">
      <Deviceinfo/>
      <Canvas/>
    </div>
  );
}

export default Map;
