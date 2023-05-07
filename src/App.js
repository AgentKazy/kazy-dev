import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
