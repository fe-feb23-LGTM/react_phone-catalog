import './App.scss';
import { Footer } from './components/Footer';
import { Main } from './components/main';
import { Header } from './components/Header';

const App = () => (
  <div className="App">
    <h1>React Phone Catalog</h1>

    <Header />

    <Main />
    <Footer />
  </div>
);

export default App;
