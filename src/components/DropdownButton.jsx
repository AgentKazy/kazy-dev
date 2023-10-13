import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./DropdownButton.module.css";

const linksArray = [
  {
    id: 1,
    url: "cv",
    text: "One",
  },
  {
    id: 2,
    url: "#",
    text: "Two",
  },
  {
    id: 3,
    url: "#",
    text: "Three",
  },
];

function DropdownButton() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button
        onClick={toggleDropdown}
        className={isDropdownOpen ? styles.open : ""}
      >
        Dropdown Button
      </button>
      {isDropdownOpen && (
        <ul className={styles.dropdownList}>
          {linksArray.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={styles.dropdownListItem}
                style={{ display: "block", marginRight: "0" }}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownButton;
