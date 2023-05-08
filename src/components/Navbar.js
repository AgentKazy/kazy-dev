import { Link } from 'react-router-dom';

// Styles & Images
import './Navbar.css';
import Snowflake from '../assets/snowflake-light.svg';
import LogoLinkedIn from '../assets/svg/LogoLinkedIn';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="site-logo">
          <img src={Snowflake} alt="Kazy website logo" />
          <span className="brand">Kazy</span>
        </li>

        <li>
          <Link to="https://www.linkedin.com/in/bmrtins/" target="_blank">
            <LogoLinkedIn />
          </Link>
        </li>
      </ul>
    </div>
  );
}
