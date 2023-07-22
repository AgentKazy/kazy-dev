// Modules
import { Link } from 'react-router-dom';

// Styles & Images
import './NavLogos.css';
import LogoLinkedIn from '../../assets/svg/LogoLinkedIn';
import LogoGithub from '../../assets/svg/LogoGithub';

export default function NavLogos() {
  return (
    <li className="nav-logos">
      <Link to="https://www.linkedin.com/in/bmrtins/" target="_blank">
        <LogoLinkedIn />
      </Link>
      <Link to="https://github.com/AgentKazy/" target="_blank">
        <LogoGithub />
      </Link>
    </li>
  );
}
