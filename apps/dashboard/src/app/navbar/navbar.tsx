import { Link } from 'react-router-dom';
import './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>JSTracker</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar;
