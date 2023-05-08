// Styles
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="copyright">
        Copyright &copy; <span className="year">{currentYear}</span> by Bruno.
        All rights reserved.
      </p>
    </div>
  );
}
