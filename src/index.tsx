import ReactDOM from 'react-dom';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import { ProductTable } from './components/ProductTable';
import { Cart } from './components/Cart';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { License } from './components/License/License';
import { ProductPage } from './components/ProductPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/phones" element={<ProductTable />} />
        <Route path="/tablets" element={<ProductPage />} />
        <Route path="/accessories" element={<h1>accessories</h1>} />
        <Route path="/favourites" element={<h1>favourites</h1>} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/contacts" element={<h1>contacts</h1>} />
        <Route path="/rights" element={<License />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
