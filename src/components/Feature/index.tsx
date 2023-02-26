import React from "react";
import clsx from "clsx";
import Button from "../Button.tsx";
import styles from "./styles.module.scss";

//Images
import Feature1 from "../../assets/images/feature_1.png";
import Feature2 from "../../assets/images/feature_2.png";
import Feature3 from "../../assets/images/feature_3.png";
import VoiceMessage from "../../assets/images/voice_message_active.png";
import TextMessage from "../../assets/images/text_message.png";
import Map from "../../assets/images/map.png";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.blur} />
      <div className={clsx("container", styles.topPadding)}>
        <div className={clsx("row", styles.feature)}>
          <div className={clsx("col-lg-6 col-md-6 col-xs-12", styles.content)}>
            <div className={styles.emoji}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM9.61523 19.0723C10.6641 20.2852 12.457 21.5625 15 21.5625C17.543 21.5625 19.3359 20.2852 20.3848 19.0723C20.7246 18.6797 21.3164 18.6387 21.709 18.9785C22.1016 19.3184 22.1426 19.9102 21.8027 20.3027C20.4961 21.8027 18.2285 23.4375 15 23.4375C11.7715 23.4375 9.50391 21.8027 8.19727 20.3027C7.85742 19.9102 7.89844 19.3184 8.29102 18.9785C8.68359 18.6387 9.27539 18.6797 9.61523 19.0723ZM8.46094 12.1875C8.46094 11.6902 8.65848 11.2133 9.01011 10.8617C9.36174 10.51 9.83866 10.3125 10.3359 10.3125C10.8332 10.3125 11.3101 10.51 11.6618 10.8617C12.0134 11.2133 12.2109 11.6902 12.2109 12.1875C12.2109 12.6848 12.0134 13.1617 11.6618 13.5133C11.3101 13.865 10.8332 14.0625 10.3359 14.0625C9.83866 14.0625 9.36174 13.865 9.01011 13.5133C8.65848 13.1617 8.46094 12.6848 8.46094 12.1875ZM19.7109 10.3125C20.2082 10.3125 20.6851 10.51 21.0368 10.8617C21.3884 11.2133 21.5859 11.6902 21.5859 12.1875C21.5859 12.6848 21.3884 13.1617 21.0368 13.5133C20.6851 13.865 20.2082 14.0625 19.7109 14.0625C19.2137 14.0625 18.7367 13.865 18.3851 13.5133C18.0335 13.1617 17.8359 12.6848 17.8359 12.1875C17.8359 11.6902 18.0335 11.2133 18.3851 10.8617C18.7367 10.51 19.2137 10.3125 19.7109 10.3125Z"
                  fill="#9B62E0"
                />
              </svg>
            </div>
            <h2>Express yourself freely</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button type="text">Learn more &rarr;</Button>
          </div>
          <div className={clsx("col-lg-6 col-md-6", styles.featureFigure)}>
            <div className={styles.containerBox}>
              <div className={styles.voiceMessage}>
                <img src={VoiceMessage} alt="voice message active screenshot" />
              </div>
              <div className={styles.emojiContainer}>
                <span>💖</span>
                <span>🔥</span>
                <span>🤣</span>
                <span>🤑</span>
                <span>🥰</span>
              </div>
              <img
                className={styles.featureImage}
                src={Feature1}
                alt="feature one"
              />
            </div>
          </div>
        </div>
        <div className={clsx("row", styles.feature)}>
          <div className={clsx("col-lg-6 col-md-6", styles.featureFigure)}>
            <img
              className={styles.featureImage}
              src={Feature2}
              alt="feature one"
            />
          </div>
          <div className={clsx("col-lg-6 col-md-6", styles.content)}>
            <div className={styles.emoji}>
              <div className={styles.ellipse}>
                <span className={styles.ellipseInner} />
              </div>
            </div>
            <h2>Create and Share</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button type="text">Learn more &rarr;</Button>
          </div>
        </div>
        <div className={clsx("row", styles.feature)}>
          <div className={clsx("col-lg-6 col-md-6", styles.content)}>
            <div className={styles.emoji}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="31"
                viewBox="0 0 25 31"
                fill="none"
              >
                <path
                  d="M12.4999 15.5001C13.302 15.5001 13.9889 15.2142 14.5605 14.6426C15.1312 14.0719 15.4166 13.3855 15.4166 12.5834C15.4166 11.7813 15.1312 11.0945 14.5605 10.5228C13.9889 9.9521 13.302 9.66675 12.4999 9.66675C11.6978 9.66675 11.0114 9.9521 10.4408 10.5228C9.86909 11.0945 9.58325 11.7813 9.58325 12.5834C9.58325 13.3855 9.86909 14.0719 10.4408 14.6426C11.0114 15.2142 11.6978 15.5001 12.4999 15.5001ZM12.4999 30.0834C8.58672 26.7536 5.66422 23.6604 3.73242 20.804C1.79964 17.9486 0.833252 15.3056 0.833252 12.8751C0.833252 9.22925 2.00624 6.32473 4.35221 4.16154C6.69721 1.99835 9.41311 0.916748 12.4999 0.916748C15.5867 0.916748 18.3026 1.99835 20.6476 4.16154C22.9936 6.32473 24.1666 9.22925 24.1666 12.8751C24.1666 15.3056 23.2007 17.9486 21.2689 20.804C19.3361 23.6604 16.4131 26.7536 12.4999 30.0834Z"
                  fill="#9B62E0"
                />
              </svg>
            </div>
            <h2>Share live location</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button type="text">Learn more &rarr;</Button>
          </div>
          <div className={clsx("col-lg-6 col-md-6", styles.featureFigure)}>
            <div className={clsx(styles.containerBox, styles.topPadding)}>
              <div className={styles.textMessage}>
                <img src={TextMessage} alt="text message screenshot" />
              </div>
              <img
                className={styles.featureImage}
                src={Feature3}
                alt="feature one"
              />
              <img className={styles.map} src={Map} alt="map icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
