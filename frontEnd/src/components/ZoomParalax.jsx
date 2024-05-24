import React, { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import styles from './styles.module.scss';
import useIsMobile from '../hooks/useIsMobile';

const ZoomParalax = () => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scale4Mob = useTransform(scrollYProgress, [0, 1], [4, 1]);
    const scale5Mob = useTransform(scrollYProgress, [0, 1], [5, 1]);
    const scale6Mob = useTransform(scrollYProgress, [0, 1], [6, 1]);
    const scale8Mob = useTransform(scrollYProgress, [0, 1], [8, 1]);
    const scale9Mob = useTransform(scrollYProgress, [0, 1], [9, 1]);


  
    const isMobile = useIsMobile();

    const pictures = [
        {
            src: '../assets/servicetest2.jpg',
            scale: scale4,
            scaleMob: scale4Mob,
        },
        {
            src: '../assets/restraunt.jpeg',
            scale: scale5,
            scaleMob: scale5Mob,
        },
        {
            src: '../assets/realEstate.jpeg',
            scale: scale6,
            scaleMob: scale6Mob,
        },
        {
            src: '../assets/wareHouse.jpeg',
            scale: scale8,
            scaleMob: scale8Mob,
        },
        {
            src: '../assets/Skincare.jpeg',
            scale: scale6,
            scaleMob: scale6Mob,
        },
        {
            src: '../assets/Marketing.jpg',
            scale: scale8,
            scaleMob: scale8Mob,
        },
        {
            src: '../assets/Event Management.jpg',
            scale: scale9,
            scaleMob: scale9Mob,
        },
    ];

    return (
        <div className="bg-white hidden lg:block">
            <div ref={container} className={styles.container}>
                <div className={styles.sticky}>
                    {pictures.map(({ src, scale, scaleMob }, index) => (
                        <motion.div
                            key={index}
                            style={isMobile ?{scale:scaleMob} :{scale:scale}}
                            className={styles.el}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={src}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="img"
                                    placeholder="blur"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ZoomParalax;
