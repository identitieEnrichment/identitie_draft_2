import React from "react";

import styles from "./page.module.scss";

import { useRef } from "react";
import gsap from "gsap";

const FloatingProducts = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      <div ref={plane1} className={styles.plane}>
        <img className="hover:scale-110" src={"../assets/non-optimized/infra.jpg"} alt="img" width={300} />
        <img
          src={"../assets/non-optimized/caseStudy.jpg"}
          alt="img"
          width={300}
        />
        <img infra
          src={"../assets/non-optimized/archi.jpg"}
          alt="img"
          width={225}
        />
      </div>
      <div ref={plane2} className={styles.plane}>
        <img src={"../assets/non-optimized/developers.jpg"} alt="img" width={250} />
        <img
          src={"../assets/non-optimized/problemsolve.jpg"}
          alt="img"
          width={200}
        />
        <img
          src={"../assets/non-optimized/productReport.jpg"}
          alt="img"
          width={225}
        />
      </div>
      <div ref={plane3} className={styles.plane}>
        <img
          src={"../assets/non-optimized/packageDesigning.jpg"}
          alt="img"
          width={150}
        />
        <img
          src={"../assets/non-optimized/Retail & Merchandising.jpg"}
          alt="img"
          width={200}
        />
      </div>
      <div className={styles.title}>
        <h1>Discover Your Identity in Every Choice!</h1>
        <p>From beauty to bites – curated just for you!</p>
      </div>
    </main>
  );
};

export default FloatingProducts;
