import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Styles
import styles from "./App.module.css";

// Pages & Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cv from "./pages/Cv";

function App() {
  return (
    <div className={styles.home}>
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
