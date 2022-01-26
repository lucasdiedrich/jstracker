// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Link } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';

export function App() {
  return (
    <>
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
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Route
            path="/"
            exact
            render={Login}
          />
          <Route
            path="/register"
            exact
            render={Register}
          />
          {/* END: routes */}
        </div>
      </div>
    </>
  );
}

export default App;
