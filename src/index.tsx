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
import { Favorites } from './components/Favorites';
import { ComingSoon } from './components/ComingSoon/ComingSoon';
import { Contacts } from './components/Contacts/Contacts';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/phones" element={<ProductTable />} />
        <Route
          path="/accessories"
          element={
            <ComingSoon title="Accessories" />
          }
        />
        <Route
          path="/tablets"
          element={
            <ComingSoon title="Tablets" />
          }
        />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/phones/:phoneId" element={<ProductPage />} />

        <Route path="/contacts" element={<Contacts />} />
        <Route path="/rights" element={<License />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
