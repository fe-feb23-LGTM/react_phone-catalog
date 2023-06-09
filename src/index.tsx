import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import App from './App';
import { Main } from './components/main';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route index element={<Main />} />
        <Route path="/catalog" element={<h1 className="title">Catalog</h1>} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
