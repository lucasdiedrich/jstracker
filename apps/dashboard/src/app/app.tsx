// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Route, Link } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Navbar from './navbar/navbar';
import Map from './map/map';

export function App() {
  return (
    <>
      <Route path="/" exact render={Login} />
      <Route path="/register" exact render={Register} />
      <Route path="/map" exact render={Map} />
      {/* END: routes */}
    </>
  );
}

export default App;
