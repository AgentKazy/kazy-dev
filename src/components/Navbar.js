import { Link } from 'react-router-dom';

// Styles & Images
import './Navbar.css';
import Snowflake from '../assets/snowflake-light.svg';
import LogoLinkedIn from '../assets/svg/LogoLinkedIn';
import LogoGithub from '../assets/svg/LogoGithub';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="site-logo">
          <img src={Snowflake} alt="Kazy website logo" />
          <span className="brand">Kazy</span>
        </li>

        <li className="nav-logos">
          <Link to="https://www.linkedin.com/in/bmrtins/" target="_blank">
            <LogoLinkedIn />
          </Link>
          <Link to="https://github.com/AgentKazy/" target="_blank">
            <LogoGithub />
          </Link>
        </li>
      </ul>
    </div>
  );
}
