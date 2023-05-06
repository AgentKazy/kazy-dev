import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import './App.css';

// Pages & Components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
