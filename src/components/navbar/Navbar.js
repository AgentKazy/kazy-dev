// Styles & Images
import './Navbar.css';

// Components
import Logo from './Logo';
import NavLogos from './NavLogos';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Logo />

        <NavLogos />
      </ul>
    </div>
  );
}
