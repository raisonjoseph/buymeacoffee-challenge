import clsx from "clsx";
import React, { useState } from "react";
import styles from "./styles.module.scss";

//
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button.tsx";
import SearchBox from "../SearchBox";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.navbar}>
      <nav className={clsx("container", styles.container)}>
        <div className={styles.logo}>
          <img alt="logo" src={Logo} />
        </div>

        <div
          className={clsx(styles.navbarCollapse, isMenuOpen && styles.active)}
        >
          <div className={styles.navbarElements}>
            <Link to="home" className={styles.navItem}>
              Home
            </Link>
            <Link to="home" className={styles.navItem}>
              Features
            </Link>
            <Link to="home" className={styles.navItem}>
              Explore Creators
            </Link>
            <Link to="home" className={styles.navItem}>
              FAQ
            </Link>
          </div>
          <div className={styles.actionItem}>
            <SearchBox />
            <Button variant="secondary">Sign In</Button>
            <Button>Sign up</Button>
          </div>
        </div>

        <div className={styles.mobileCta}>
          <Button buttonSize="small" variant="secondary">
            Sign In
          </Button>
          <Button buttonSize="small">Sign up</Button>
        </div>
        <div
          className={clsx(styles.menu, isMenuOpen && styles.active)}
          role="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
