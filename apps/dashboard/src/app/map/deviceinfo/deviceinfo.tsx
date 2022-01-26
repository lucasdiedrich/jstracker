import Form from 'react-bootstrap/esm/Form';
import Actions from './actions/actions';
import './deviceinfo.module.scss';
import Info from './info/info';
import List from './list/list';

/* eslint-disable-next-line */
export interface DeviceinfoProps {}

export function Deviceinfo(props: DeviceinfoProps) {
  return (
    <div className="device_info">
      <List />
      <Info />
      <Actions />
    </div>
  );
}

export default Deviceinfo;
