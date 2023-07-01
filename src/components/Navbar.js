import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Styles & Images
import './Navbar.css';
import Snowflake from '../assets/snowflake-light.svg';
import LogoLinkedIn from '../assets/svg/LogoLinkedIn';
import LogoGithub from '../assets/svg/LogoGithub';

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul>
        <li className="site-logo">
          <img src={Snowflake} alt="Kazy website logo" />
          {location.pathname === '/' ? (
            <span className="brand">Kazy</span>
          ) : (
            <Link to="/">
              <span className="brand">Kazy</span>
            </Link>
          )}
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
