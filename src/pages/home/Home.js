import { Link } from 'react-router-dom';

// Assets
import LogoHTML from '../../assets/svg/LogoHTML';
import LogoCSS from '../../assets/svg/LogoCSS';
import LogoJS from '../../assets/svg/LogoJS';
import LogoReact from '../../assets/svg/LogoReact';
import LogoMySQL from '../../assets/svg/LogoMySQL';

// Styles
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <h2 className="subheading">Certificates obtained by Bruno</h2>
      <div className="reactjs-box logo-box">
        <Link
          to={'https://ude.my/UC-4f6cc7b2-3dd3-4c62-ba16-9671214e7d6d/'}
          target="_blank"
        >
          <LogoReact />
        </Link>
      </div>

      <div className="javascript-box logo-box">
        <Link
          to={'https://ude.my/UC-8eaaafa0-504b-4c88-838b-4c909d3335a1/'}
          target="_blank"
        >
          <LogoJS />
        </Link>
      </div>

      <div className="html-css-box logo-box dual-logo">
        <Link
          to={'https://ude.my/UC-a2ab9a40-ae7e-44e4-8753-bd03b6aaefe9/'}
          target="_blank"
        >
          <LogoHTML />
          <LogoCSS />
        </Link>
      </div>

      <div className="mysql-box logo-box">
        <span className="in-progress">In progress</span>
        <LogoMySQL />
      </div>
    </div>
  );
}
