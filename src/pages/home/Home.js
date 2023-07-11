import { Link } from 'react-router-dom';

// Assets
import LogoHTML from '../../assets/svg/LogoHTML';
import LogoCSS from '../../assets/svg/LogoCSS';
import LogoJS from '../../assets/svg/LogoJS';
import LogoReact from '../../assets/svg/LogoReact';
import LogoMySQL from '../../assets/svg/LogoMySQL';
import LogoNode from '../../assets/svg/LogoNode';

// Styles
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <h2 className="subheading noselect">
        Certificates obtained by Bruno (Click to visit!)
      </h2>
      <div className="javascript-box logo-box anim">
        <Link
          to={'https://ude.my/UC-8eaaafa0-504b-4c88-838b-4c909d3335a1/'}
          target="_blank"
        >
          <LogoJS />
        </Link>
      </div>

      <div className="html-css-box logo-box dual-logo anim">
        <Link
          to={'https://ude.my/UC-a2ab9a40-ae7e-44e4-8753-bd03b6aaefe9/'}
          target="_blank"
        >
          <LogoHTML />
          <LogoCSS />
        </Link>
      </div>

      <div className="reactjs-box logo-box anim">
        <Link
          to={'https://ude.my/UC-4f6cc7b2-3dd3-4c62-ba16-9671214e7d6d/'}
          target="_blank"
        >
          <LogoReact />
        </Link>
      </div>

      <div className="mysql-box logo-box anim">
        <Link
          to={'https://ude.my/UC-ce3021d5-6158-42f6-b20a-95d8afcaa43b/'}
          target="_blank"
        >
          <LogoMySQL />
        </Link>
      </div>

      <div className="nodejs-box logo-box">
        <span className="in-progress noselect">In progress</span>
        <LogoNode />
      </div>
    </div>
  );
}
