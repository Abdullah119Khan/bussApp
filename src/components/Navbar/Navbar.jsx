import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headers}>
        <Link to="/" className={styles.link}>
          <h1 data-aos="fade-right" data-aos-delay="500">
            Buses Rental
          </h1>
        </Link>
        <nav>
          <ul
            className={
              nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
            }
          >
            <Link to="/" className={styles.link}>
              <li>HOME</li>
            </Link>
            <Link to="/about" className={styles.link}>
              <li>ABOUT US</li>
            </Link>
            <Link to="/fleet" className={styles.link}>
              <li>FLEET</li>
            </Link>
            <Link to="/rate" className={styles.link}>
              <li>RATE</li>
            </Link>
            <Link to="/services" className={styles.link}>
              <li>SERVICES</li>
            </Link>
            <Link to="/contact" className={styles.link}>
              <li>CONTACT US</li>
            </Link>
          </ul>
        </nav>

        <div className={styles.menuIcon} onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
