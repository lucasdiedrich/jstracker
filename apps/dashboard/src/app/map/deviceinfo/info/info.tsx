import './info.module.scss';

/* eslint-disable-next-line */
export interface InfoProps {}

export function Info(props: InfoProps) {
  return (
    <div className="tab-content">
      <div id="device-info">
        <img
          className="device-icon-large"
          src="/assets/device.webp"
          aria-hidden="true"
        />
        <div className="device-details">
          <span> MI 9 LITE </span>
          <br></br>
          <div className="details-container">
            <span> Status: Active </span> <br />
            <span> Battery: 49%</span> <br />
            <span> Connected 10 seconds ago. </span> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
