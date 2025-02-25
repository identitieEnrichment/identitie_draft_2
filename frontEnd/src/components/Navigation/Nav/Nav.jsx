
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
    src: "../assets/toOptimize/Website_Home_Black.jpg"
  },
  {
    title: "Services",
    href: "/services",
    src: "../assets/toOptimize/Website_Services_Black.jpg"
  },
  {
    title: "Sectors",
    href: "/sectors",
    src: "../assets/toOptimize/Website_Sectors_Black.jpg"
  },
  {
    title: "Products",
    href: "/productshome",
    src: "../assets/toOptimize/Website_Products_Black.jpg"
  },
  {
    title: "About",
    href: "/aboutus",
    src: "../assets/toOptimize/Website_About_Black.jpg"
  },
  {
    title: "Contact ",
    href: "/contactus",
    src: "../assets/toOptimize/Website_Contact_Black.jpg"
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
       
				
				<a href="https://www.linkedin.com/company/identitie-enrichment/"
							target="_blank"
							rel="noreferrer" className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaLinkedin className='text-2xl md:text-3xl' />
				</a>
        <a href="https://api.whatsapp.com/send?phone=9444543659&text=Hi!%20I'm%20excited%20to%20learn%20how%20IDENTITIE's%20brand%20fulfillment%20can%20support%20my%20business.%20Could%20we%20chat?" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-md transition duration-300 hover:scale-110"> 
					<FaWhatsapp  className='text-2xl md:text-3xl' />
				</a>
			</div>
    </motion.div>
  )
}