import styles from "./style.module.scss";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "../../utils/anim";
import Nav from "./Nav/Nav";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function NavigationBar() {
	const [isActive, setIsActive] = useState(false);
	const header = useRef(null);
	const logo = useRef(null);
	return (
		<div id="nav" ref={header} className={styles.header}>
			<div className={styles.bar}>
				<div
					onClick={() => {
						setIsActive(!isActive);
						if (
							header.current.style.backgroundColor === "" ||
							header.current.style.backgroundColor === "transparent"
						) {
							header.current.style.backgroundColor = "white";
							logo.current.style.display = "flex";
							document.body.style.overflow = "hidden";
							header.current.style.height = '100%'

						} else {
							logo.current.style.display = "none";
							document.body.style.overflow = "auto";
							header.current.style.height = 'auto'
							setTimeout(() => {
								header.current.style.backgroundColor = "transparent";
							}, 900);
						}
					}}
					className={styles.el}>
					<motion.img
						variants={opacity}
						animate={isActive ? "open" : "closed"}
						ref={logo}
						src="../assets/logoIE.png"
						alt="logo"
						className="h-8 md:h-12 absolute left-0 md:top-3 hidden top-2 "
					/>
					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ""
						} `}></div>
					<div className={styles.label}>
						<IoIosMenu
							className={`text-white text-xl translate-x-10 burgerMenu ${
								isActive ? "hidden" : "inline-block"
							}`}
						/>
						<motion.p
							variants={opacity}
							animate={!isActive ? "open" : "closed"}
							className="text-white translate-x-12 menuText">
							Menu
						</motion.p>
						<motion.button
							variants={opacity}
							animate={isActive ? "open" : "closed"}
							className="close border-[1px] border-black rounded-full p-2 px-2 flex gap-1 right-2 top-1 items-center justify-center">
							<IoMdClose className=" text-xl" />
							Close
						</motion.button>
					</div>
				</div>
			</div>
			<motion.div
				variants={background}
				initial="initial"
				animate={isActive ? "open" : "closed"}
				className={styles.background}></motion.div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</div>
	);
}
