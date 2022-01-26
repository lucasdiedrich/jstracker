// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Link } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Navbar from './navbar/navbar';

export function App() {
  return (
    <>
      <Navbar />
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
