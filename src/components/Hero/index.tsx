import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Button from "../../components/Button.tsx";

//Images
import Product from "../../assets/images/product_screen.png";
import VoiceMessage from "../../assets/images/voice_message.png";
import Gift from "../../assets/images/gift.svg";
import Avatar from "../../assets/images/avatar_girl.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.head}>
          <h1>
            Stay close to your <br />
            <em>favorite people</em>
          </h1>
          <div className={styles.phoneContainer}>
            <input
              placeholder="Enter your phone number"
              className={styles.inputField}
            />
            <Button className={styles.btn}>Get started</Button>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.screenshot}>
            <img src={Product} alt="product screenshot" />
            <div className={clsx(styles.voiceMessage, "float")}>
              <img src={VoiceMessage} alt="voice message screenshot" />
            </div>
            <div className={clsx(styles.gift, "float")}>
              <div className={styles.box}>
                <img className={styles.giftIcon} src={Gift} alt="gift vector" />
                <p className={styles.text}>You received a Gift</p>
                <Button className={styles.button}>View gift</Button>
              </div>
              <div className={styles.avatar}>
                <img src={Avatar} alt="avatar girl" />
              </div>
            </div>
          </div>
          <div className={styles.circleGreen} />
          <div className={clsx(styles.circleGreen, styles.right)} />
          <div className={styles.circlePurple} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
