import './newdevice.module.scss';

/* eslint-disable-next-line */
export interface NewdeviceProps {}

export function Newdevice(props: NewdeviceProps) {
  return (
    <div>
      <h1>No devices listed!</h1>
      <p> Please scan the Qrcode below to add a new device: </p>
    </div>
  );
}

export default Newdevice;
