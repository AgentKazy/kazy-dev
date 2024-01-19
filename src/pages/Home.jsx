import { Link } from "react-router-dom";

// Assets
import Star from "../assets/svg/Star";
import { certs } from "./Certifications";

// Styles
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      <div className={styles.container}>
        <p className={styles.subheading}>
          Certificates obtained by Bruno (Click to visit!)
        </p>
        {certs.map((cert) => (
          <div className={cert.logoClass} key={cert.id}>
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
            {cert.showProgressText && (
              <div
                className={styles.progressText}
                style={{
                  "--progress": `${cert.progress}%`,
                }}
              >
                {cert.progressDescription} ({cert.progress}%)
              </div>
            )}
            {cert.paused && (
              <div
                className={styles.progressText}
                style={{
                  "background-color": "#f6f1e0",
                }}
              >
                Paused
              </div>
            )}
            {cert.starred && <Star />}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
