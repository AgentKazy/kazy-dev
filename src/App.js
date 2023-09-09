import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Pages & Components
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cv from "./assets/Cv";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
