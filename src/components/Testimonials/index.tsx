import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

//Images
import Testimonial1Img from "../../assets/images/testimonial_1.png";
import Testimonial2Img from "../../assets/images/testimonial_2.png";
import Testimonial3Img from "../../assets/images/testimonial_3.png";
import Testimonial4Img from "../../assets/images/testimonial_4.png";
import Testimonial5Img from "../../assets/images/testimonial_5.png";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    // Return if no element
    if (!slider) return;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let velX = 0;
    let momentumID: number;
    // Always position the scroll in the center
    slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;

    function mouseDown(e: MouseEvent) {
      isDown = true;
      slider!.classList.add(styles.active);
      startX = e.pageX - slider!.offsetLeft;
      scrollLeft = slider!.scrollLeft;
      cancelMomentumTracking();
      e.preventDefault();
    }

    function mouseLeave() {
      isDown = false;
      slider!.classList.remove(styles.active);
    }

    function mouseUp(e: MouseEvent) {
      isDown = false;
      slider!.classList.remove(styles.active);
      beginMomentumTracking();
      e.preventDefault();
    }

    function mouseMove(e: MouseEvent) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider!.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      var prevScrollLeft = slider!.scrollLeft;
      slider!.scrollLeft = scrollLeft - walk;
      velX = slider!.scrollLeft - prevScrollLeft;
    }

    // Momentum

    function beginMomentumTracking() {
      cancelMomentumTracking();
      momentumID = requestAnimationFrame(momentumLoop);
    }
    function cancelMomentumTracking() {
      cancelAnimationFrame(momentumID);
    }
    function momentumLoop() {
      slider!.scrollLeft += velX;
      velX *= 0.15;
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
      }
    }
    // Events
    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);
    return () => {
      if (!slider) return;
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, [sliderRef]);

  useEffect(() => {}, [centerRef]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.head}>
        <h2>Around 5M+ creators</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut la
        </p>
      </div>
      <div className={styles.slider} ref={sliderRef}>
        <div className={styles.testimonial}>
          <div className={styles.badge}>
            <span className={clsx(styles.dot, styles.active)} />
            Active
          </div>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Sendez Martin</h6>
          </div>
          <img src={Testimonial3Img} alt="testimonial" />
          <div className={styles.frame} />
        </div>
        <div className={styles.testimonial}>
          <div className={styles.badge}>
            <span className={clsx(styles.dot, styles.active)} />
            Active
          </div>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Maria Hugh</h6>
          </div>
          <img src={Testimonial2Img} alt="testimonial" />
          <div className={styles.frame} />
        </div>
        <div className={styles.testimonial} ref={centerRef}>
          <div className={styles.badge}>
            <span className={clsx(styles.dot, styles.inactive)} />
            Inactive
          </div>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Rick Sanchez</h6>
          </div>
          <img src={Testimonial1Img} alt="testimonial" />
          <div className={styles.frame} />
        </div>
        <div className={styles.testimonial}>
          <div className={styles.badge}>
            <span className={clsx(styles.dot, styles.active)} />
            Active
          </div>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Rebecca Burucki</h6>
          </div>
          <img src={Testimonial4Img} alt="testimonial" />
          <div className={styles.frame} />
        </div>
        <div className={styles.testimonial}>
          <div className={styles.badge}>
            <span className={clsx(styles.dot, styles.inactive)} />
            Inactive
          </div>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Alexandra Sam</h6>
          </div>
          <img src={Testimonial5Img} alt="testimonial" />
          <div className={styles.frame} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
