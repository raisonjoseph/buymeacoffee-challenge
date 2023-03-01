import clsx from "clsx";
import React, { useMemo, useState } from "react";
import styles from "./styles.module.scss";

//
import Logo from "../../assets/images/logo.png";
import Profile from "../../assets/images/profile.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button.tsx";
import SearchBox from "../SearchBox";
import UserProfile from "../UserProfile";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/user-management");
  };
  const isOnUserManagementScreen = useMemo(
    () =>
      location.pathname === "/user-management" ||
      location.pathname === "/user-management/",
    [location.pathname]
  );
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
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
            <Link to="/" className={styles.navItem}>
              Features
            </Link>
            <Link to="/" className={styles.navItem}>
              Explore Creators
            </Link>
            <Link to="/" className={styles.navItem}>
              FAQ
            </Link>
          </div>

          <div className={styles.actionItem}>
            {isOnUserManagementScreen ? (
              <UserProfile
                className={styles.profile}
                title="Admin"
                displayPicture={Profile}
              />
            ) : (
              <React.Fragment>
                <SearchBox />
                <Button onClick={handleSignIn} variant="secondary">
                  Sign In
                </Button>
                <Button>Sign Up</Button>
              </React.Fragment>
            )}
          </div>
        </div>

        <div className={styles.mobileCta}>
          {isOnUserManagementScreen ? (
            <UserProfile title="Admin" displayPicture={Profile} />
          ) : (
            <React.Fragment>
              <Button
                buttonSize="small"
                variant="secondary"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button buttonSize="small">Sign Up</Button>
            </React.Fragment>
          )}
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
