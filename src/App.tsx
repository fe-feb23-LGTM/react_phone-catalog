import './App.scss';
import { Outlet, NavLink } from 'react-router-dom';

import { Footer } from './components/Footer';

const App = () => (
  <div className="App">
    <header>
      <NavLink to="/"> HOME </NavLink>
      <NavLink to="/catalog"> PHONES </NavLink>
    </header>
    <Outlet />
    <Footer />
  </div>
);

export default App;
