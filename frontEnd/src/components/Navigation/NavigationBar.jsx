import styles from "./style.module.scss";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "../../utils/anim";
import Nav from "./Nav/Nav";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

export default function NavigationBar({layout}) {
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

							header.current.style.height = "100%";
						} else {
							logo.current.style.display = "none";

							header.current.style.height = "auto";
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
						src="../assets/logo-black.png"
						alt="logo"
						className="h-6 md:h-12 absolute  md:top-3 hidden top-2 left-2 "
					/>

					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ""
						} `}></div>
					<div className={styles.label}>
						<RiMenu3Fill className={` text-2xl translate-x-12 burgerMenu ${isActive ? "hidden" : "flex"} ${layout === "About" ? "text-black" : "text-white"}`} />

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
