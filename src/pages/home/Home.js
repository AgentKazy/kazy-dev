import { Link } from "react-router-dom";

// Assets
import LogoHTML from "../../assets/svg/LogoHTML";
import LogoCSS from "../../assets/svg/LogoCSS";
import LogoJS from "../../assets/svg/LogoJS";
import LogoReact from "../../assets/svg/LogoReact";
import LogoMySQL from "../../assets/svg/LogoMySQL";
import LogoNode from "../../assets/svg/LogoNode";

// Styles
import "./Home.css";

const certs = [
  {
    id: 1,
    name: "JavaScript",
    link: "https://ude.my/UC-8eaaafa0-504b-4c88-838b-4c909d3335a1/",
    logo1: LogoJS,
    logoClass: "anim",
  },
  {
    id: 2,
    name: "HTML & CSS",
    link: "https://ude.my/UC-a2ab9a40-ae7e-44e4-8753-bd03b6aaefe9/",
    logo1: LogoHTML,
    logo2: LogoCSS,
    logoClass: "anim",
  },
  {
    id: 3,
    name: "React",
    link: "https://ude.my/UC-4f6cc7b2-3dd3-4c62-ba16-9671214e7d6d/",
    logo1: LogoReact,
    logoClass: "anim progress",
  },
  {
    id: 4,
    name: "MySQL",
    link: "https://ude.my/UC-ce3021d5-6158-42f6-b20a-95d8afcaa43b/",
    logo1: LogoMySQL,
    logoClass: "anim",
  },
  {
    id: 5,
    name: "Node",
    link: null,
    logo1: LogoNode,
    logoClass: "paused",
  },
];

export default function Home() {
  return (
    <div className="container">
      <h2 className="subheading noselect">
        Certificates obtained by Bruno (Click to visit!)
      </h2>
      {certs.map((cert) => (
        <div className={`logo-box ${cert.logoClass}`} key={cert.id}>
          {cert.link ? (
            <Link to={cert.link} target="_blank">
              <cert.logo1 />
              {cert.logo2 ? <cert.logo2 /> : null}
            </Link>
          ) : (
            <>
              <cert.logo1 />
              {cert.logo2 ? <cert.logo2 /> : null}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
