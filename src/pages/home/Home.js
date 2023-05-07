import { Link } from 'react-router-dom';

// Assets
import LogoHTML from '../../assets/svg/LogoHTML';
import LogoCSS from '../../assets/svg/LogoCSS';
import LogoJS from '../../assets/svg/LogoJS';
import LogoReact from '../../assets/svg/LogoReact';

// Styles
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <h2 className="subheading">Certificates obtained by Bruno</h2>
      <div className="logos">
        <div className="html-css logo-box dual-logo">
          {/* <Link
            className="htmlcss"
            to={'https://ude.my/UC-a2ab9a40-ae7e-44e4-8753-bd03b6aaefe9/'}
            target="_blank"
          > */}
          <LogoHTML />
          <LogoCSS />
          {/* </Link> */}
        </div>

        <div className="javascript logo-box">
          <LogoJS />
        </div>

        <div className="reactjs logo-box">
          <LogoReact />
        </div>
      </div>
    </div>
  );
}
