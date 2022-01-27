import { useState } from 'react';
import './list.module.scss';

/* eslint-disable-next-line */
export interface ListProps {}

export function List(props: ListProps) {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Device 1', img: '/assets/device.webp', selected: true },
    { id: 2, name: 'Device 2', img: '/assets/device.webp' },
  ]);

  return (
    <header>
      <div id="material-tabs">
        {devices.map((dev) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href="#"
            key={dev.id}
            className={`device_tab ${dev.selected ? 'active' : ''}`}
          >
            <img className="device-icon" src={dev.img} aria-label={dev.name} />
          </a>
        ))}
      </div>
    </header>
  );
}

export default List;
