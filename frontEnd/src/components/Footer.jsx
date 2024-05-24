import React from "react";
import {
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaLinkedin,
} from "react-icons/fa";
import FooterList from "./FooterList";
import { FooterDataCompanyLinks, FooterDataQuickLinks, FooterDataWhatWeDo } from "../utils/servicesDatas";

const Footer = () => {
	return (
		<div className="bg-black p-16">
			<div className="flex gap-20">
				<div className="flex flex-col space-y-4 w-4/12">
					<span className="text-white text-3xl font-bold tracking-wider">
						IDENTITIE
					</span>
					<p className="text-white font-poppins">
						We are your partner in web development, digital marketing, and
						software services, committed to elevating your online presence and
						driving digital success. Trust Identitie for innovative solutions
						and unparalleled results.
					</p>
				</div>
				<FooterList title={'What We Do'} data={FooterDataWhatWeDo} />
				<FooterList title={'Company'} data={FooterDataCompanyLinks} />
				<FooterList title={'Quick Links'} data={FooterDataQuickLinks} />
			</div>
			<div className="flex gap-4 mt-5">
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaInstagram />
				</button>
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaFacebook />
				</button>
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaWhatsapp />
				</button>
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaLinkedin />
				</button>
			</div>
            <div className="w-full flex items-center justify-center mt-8">
                <span className="text-white font-poppins">© Copyright IDENTITIE pvt ltd.. All Rights Reserved</span>
            </div>
		</div>
	);
};

export default Footer;
