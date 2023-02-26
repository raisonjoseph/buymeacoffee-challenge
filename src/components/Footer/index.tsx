import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
// Images
import LogoImg from "../../assets/images/logo.png";
import AppleStoreImg from "../../assets/images/app_store.png";
import GoolePlayImg from "../../assets/images/google_play.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <img src={LogoImg} alt="logo" />
          </div>
          <div className={clsx("row", styles.row)}>
            <div className={clsx("col-lg-3 cold-md-3 col-sm-6", styles.col)}>
              <h6 className={styles.footerTitle}>Company</h6>
              <ul className={styles.list}>
                <li>About</li>
                <li>Privacy</li>
                <li>Policy & Terms</li>
              </ul>
            </div>
            <div className={clsx("col-lg-3 cold-md-3 col-sm-6", styles.col)}>
              <h6 className={styles.footerTitle}>Support</h6>
              <ul className={styles.list}>
                <li>Chat with us</li>
                <li>Help Center</li>
                <li>Feature request</li>
              </ul>
            </div>
            <div className={clsx("col-lg-3 cold-md-3 col-sm-6", styles.col)}>
              <h6 className={styles.footerTitle}>Community</h6>
              <ul className={styles.list}>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Discord</li>
              </ul>
            </div>
            <div className={clsx("col-lg-3 cold-md-3 col-sm-6", styles.col)}>
              <h6 className={styles.footerTitle}>More</h6>
              <ul className={styles.list}>
                <li>Buttons</li>
                <li>Brand assests</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col">
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noreferrer"
                className={styles.appLink}
              >
                <img src={AppleStoreImg} alt="apple store app link" />
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noreferrer"
                className={styles.appLink}
              >
                <img src={GoolePlayImg} alt="google play store app link" />
              </a>
              <p className={styles.copyright}>
                © {new Date().getFullYear()}. Privacy & Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
