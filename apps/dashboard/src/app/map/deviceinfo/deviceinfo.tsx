import './deviceinfo.module.scss';
import Info from './info/info';
import List from './list/list';
import Actions from './actions/actions';
import { Link } from 'react-router-dom';
import Insidenav from './insidenav/insidenav';

/* eslint-disable-next-line */
export interface DeviceinfoProps {}

export function Deviceinfo(props: DeviceinfoProps) {
  return (
    <div className="device_info">
      <Insidenav />
      <List />
      <Info />
      <Actions />
    </div>
  );
}

export default Deviceinfo;
