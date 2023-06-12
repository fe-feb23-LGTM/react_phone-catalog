import ReactDOM from 'react-dom';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import { Main } from './components/Main';
import { NotFound } from './components/NotFound/notFound';
import { Cart } from './components/Cart';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">home page</h1>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/phones" element={<Main />} />
        <Route path="/tablets" element={<h1>tablets</h1>} />
        <Route path="/accessories" element={<h1>accessories</h1>} />
        <Route path="/favourites" element={<h1>favourites</h1>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<h1 className="title">Page not found</h1>} /> */}
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
