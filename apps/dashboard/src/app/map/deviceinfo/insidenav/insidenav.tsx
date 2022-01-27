import { Link } from 'react-router-dom';
import './insidenav.module.scss';

/* eslint-disable-next-line */
export interface InsidenavProps {}

export function Insidenav(props: InsidenavProps) {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-top">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to={'/'}>
          JSTracker
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Insidenav;
