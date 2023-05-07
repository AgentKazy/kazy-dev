// Styles & Images
import './Navbar.css';
import Snowflake from '../assets/snowflake-light.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="site-logo">
          <img src={Snowflake} alt="Kazy website logo" />
          <span className="brand">Kazy</span>
        </li>
      </ul>
    </div>
  );
}
