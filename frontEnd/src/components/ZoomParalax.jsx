import React from 'react'
import styles from './styles.module.scss';



import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';
const ZoomParalax = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "../assets/servicetest2.jpg",
            scale: scale4
        },
        {
            src: "../assets/restraunt.jpeg",
            scale: scale5
        },
        {
            src:"../assets/realEstate.jpeg",
            scale: scale6
        },
        {
            src: "../assets/wareHouse.jpeg",
            scale: scale5
        },
        {
            src: "../assets/Skincare.jpeg",
            scale: scale6
        },
        {
            src: "../assets/Marketing.jpg",
            scale: scale8
        },
        {
            src: "../assets/Event Management.jpg",
            scale: scale9
        }
    ]

    return (
        <div  ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={src}
                                    className="absolute inset-0 w-full h-full object-cover  " 
                                    
                                    alt="img"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}

export default ZoomParalax
