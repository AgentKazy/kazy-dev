// Styles
import styles from "./Cv.module.css";

// Assets
import pdfCV from "../assets/pdf/CV_BRUNO.pdf";

export default function Cv() {
  return (
    <div className={styles.container}>
      <embed src={pdfCV} type="application/pdf" width="100%" height="100%" />
    </div>
  );
}
