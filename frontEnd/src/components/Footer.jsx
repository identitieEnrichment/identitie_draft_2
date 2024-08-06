import React from "react";
import {
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaLinkedin,
} from "react-icons/fa";
import FooterList from "./FooterList";
import {
	FooterDataCompanyLinks,
	FooterDataQuickLinks,
	FooterDataWhatWeDo,
} from "../utils/servicesDatas";

const Footer = () => {
	return (
		<div className="bg-black lg:p-16 px-6">
			<div className="lg:flex lg:gap-20 space-y-7">
				<div className="flex flex-col space-y-4 lg:w-4/12">
					<span className="text-white text-3xl font-bold tracking-wider">
						IDENTITIE
					</span>
					<p className="text-white font-poppins">
						Identitie is your go-to partner for web development, digital
						marketing, and a diverse range of solutions across various sectors.
						We are committed to enhancing your presence, driving growth, and
						scaling your success. Trust us for innovative strategies and
						unparalleled results.
					</p>
				</div>
				<div className="flex gap-4 mt-5 lg:hidden">
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
				<FooterList title={"What We Do"} data={FooterDataWhatWeDo} />
				<FooterList title={"Company"} data={FooterDataCompanyLinks} />
				<FooterList title={"Quick Links"} data={FooterDataQuickLinks} />
			</div>
			<div className=" gap-4 mt-5 hidden lg:flex">
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
				<span className="text-white font-poppins">
					© Copyright IDENTITIE pvt ltd.. All Rights Reserved
				</span>
			</div>
		</div>
	);
};

export default Footer;
