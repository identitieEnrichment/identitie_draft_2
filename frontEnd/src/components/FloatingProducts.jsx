import React from "react";

import styles from "./page.module.scss";

import { useRef } from "react";
import gsap from "gsap";

const FloatingProducts = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
 

  return (
    <main
      
      className={styles.main}
    >
      <div ref={plane1} className={styles.plane}>

        <img className="hover:scale-110 border-2 border-white " src={"../assets/non-optimized/infra.jpg"} alt="img" width={300} />
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
