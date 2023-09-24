import { Link } from "react-router-dom";

// Styles & Images
import styles from "./Navbar.module.css";

// Components
import Logo from "./Logo";
import LogoLinkedIn from "../assets/svg/LogoLinkedIn";
import LogoGithub from "../assets/svg/LogoGithub";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <ul>
        <li>
          <Link
            to="https://www.linkedin.com/in/bmrtins/"
            target="_blank"
            className={styles.logo}
          >
            <LogoLinkedIn />
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/AgentKazy/"
            target="_blank"
            className={styles.logo}
          >
            <LogoGithub />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
