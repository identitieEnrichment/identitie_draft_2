
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../../../utils/anim';
import Body from '../Body/Body';
import Image from '../Image/Image';
import {
  FaFacebook,
	FaInstagram,
	FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  {
    title: "Home",
    href: "/",
    src: "../assets/optimized/archi-optimized.jpeg"
  },
  {
    title: "Services",
    href: "/services",
    src: "../assets/optimized/ecommerceService-optimized.jpeg"
  },
  {
    title: "Sectors",
    href: "/sectors",
    src: "../assets/optimized/archi.jpg"
  },
  {
    title: "Products",
    href: "/products",
    src: "../assets/optimized/Skincare-optimized.jpeg"
  },
  {
    title: "About",
    href: "/aboutus",
    src: "../assets/optimized/archi-optimized.jpeg"
  },
  {
    title: "Contact ",
    href: "/contactus",
    src: "../assets/optimized/contactus-optimized.png"
  }
]

export default function Nav() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
      <div className="flex gap-4 mt-5 md:translate-x-[40%]">
				<a href="https://www.instagram.com/identitie.ie/"
							target="_blank"
							rel="noreferrer" className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaInstagram className='text-2xl md:text-3xl' />
				</a>
        <a href="https://www.facebook.com/profile.php?id=61556107611993&mibextid=wwXIfr&rdid=vDrmqRlp2qOtg7Jx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DBJGfEWrj%2F%3Fmibextid%3DwwXIfr#"
							target="_blank"
							rel="noreferrer" className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaFacebook className='text-2xl md:text-3xl' />
				</a>
        <a  href="https://api.whatsapp.com/send?phone=+919952698022&text=I'm%20interested%20in%20your%20service" target="_blank"
							rel="noreferrer" className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaWhatsapp  className='text-2xl md:text-3xl' />
				</a>
				
				<a href="https://www.linkedin.com/company/identitie-enrichment/"
							target="_blank"
							rel="noreferrer" className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaLinkedin className='text-2xl md:text-3xl' />
				</a>
			</div>
    </motion.div>
  )
}