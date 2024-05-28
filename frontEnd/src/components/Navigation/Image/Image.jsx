import React from 'react'
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { opacity } from '../../../utils/anim';

export default function Index({src, isActive}) {
  return (
    <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className={styles.imageContainer}>
        <img 
        src={src === '' ? '/images/architects.jpeg' : `/images/${src}`}
        alt="imae"
        />
    </motion.div>
  )
}