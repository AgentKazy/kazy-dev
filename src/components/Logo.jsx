import React from "react";
import { Link } from "react-router-dom";

// Styles & Images
import styles from "./Logo.module.css";
import Snow from "../assets/svg/snowflake-light.svg";

function Logo() {
  return (
    <Link to="/" className={styles.siteLogo}>
      <img className={styles.spin} src={Snow} alt="Kazy website logo" />
      <span className={styles.brand}>Kazy</span>
    </Link>
  );
}

export default Logo;
