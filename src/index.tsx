import ReactDOM from 'react-dom';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App';
import { Main } from './components/Main/Main';
import { Cart } from './components/Cart';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/TempNotFound';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/phones" element={<Main />} />
        <Route path="/tablets" element={<h1>tablets</h1>} />
        <Route path="/accessories" element={<h1>accessories</h1>} />
        <Route path="/favourites" element={<h1>favourites</h1>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
