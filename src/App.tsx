import './App.scss';
import { Outlet, NavLink } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
  <div className="App">
    <header>
      <Header />
      <NavLink to="/"> HOME </NavLink>
      <NavLink to="/catalog"> PHONES </NavLink>
    </header>
    <Outlet />
    <Footer />
  </div>
);

export default App;
