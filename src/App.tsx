import './App.scss';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
  <div className="App">
    <header>
      <Header />
    </header>

    <Outlet />
    <Footer />
  </div>
);

export default App;
