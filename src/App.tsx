import './App.scss';
import { Main } from './components/main';
import { Header } from './components/Header';

const App = () => (
  <div className="App">
    <h1>React Phone Catalog</h1>

    <Header />

    <Main />
  </div>
);

export default App;
