import React from "react";
import {
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaLinkedin,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import FooterList from "./FooterList";
import {
	FooterDataCompanyLinks,
	FooterDataQuickLinks,
	FooterDataWhatWeDo,
} from "../utils/servicesDatas";

const Footer = () => {
	return (
		<div className="bg-[#1D1D1D] lg:p-16 p-6">
			<div className="lg:flex lg:gap-20 space-y-7">
				<div className="flex flex-col space-y-4 lg:w-4/12">
					<img className="h-7 w-max" src="../assets/logo-red.png" alt="logo" />
					<p className="text-white font-poppins text-sm">
						Identitie is your go-to partner for web development, digital
						marketing, and a diverse range of solutions across various sectors.
						We are committed to enhancing your presence, driving growth, and
						scaling your success. Trust us for innovative strategies and
						unparalleled results.
					</p>
				</div>
				<div className="lg:hidden">
					<span className="text-white text-lg font-semibold lg:text-xl font-poppins">
						Stay in touch
					</span>
					<div className="flex gap-4 mt-5 ">
						<a
							href="https://www.instagram.com/identitie.ie/"
							target="_blank"
							rel="noreferrer"
							className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
							<FaInstagram />
						</a>
						<a
							href="https://www.instagram.com/identitie.ie/"
							target="_blank"
							rel="noreferrer"
							className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
							<FaFacebook />
						</a>

						<a
							href="https://www.linkedin.com/company/identitie-enrichment/"
							target="_blank"
							rel="noreferrer"
							className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className=" gap-4 mt-5 hidden lg:block">
					<span className="text-white text-lg font-semibold lg:text-xl font-poppins">
						Stay in touch
					</span>
					<div className="flex gap-4 mt-5 ">
						<a
							href="https://www.instagram.com/identitie.ie/"
							target="_blank"
							rel="noreferrer"
							className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
							<FaInstagram />
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=61556107611993&mibextid=wwXIfr&rdid=vDrmqRlp2qOtg7Jx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DBJGfEWrj%2F%3Fmibextid%3DwwXIfr#"
							target="_blank"
							rel="noreferrer"
							className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
							<FaFacebook />
						</a>

						<a
							href="https://www.linkedin.com/company/identitie-enrichment/"
							target="_blank"
							rel="noreferrer"
							className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
							<FaLinkedin />
						</a>
					</div>
				</div>

				<div className=" gap-4 mt-5 lg:w-3/12 space-y-3">
					<span className="text-white text-lg font-semibold lg:text-xl font-poppins">
						Subscribe Asap
					</span>
					<div className=" border-white border-[1px] ">
						<input
							className="h-full bg-transparent w-full p-2 text-white"
							type="text"
							name=""
							id=""
							placeholder="Enter Email"
						/>
					</div>
					<button className="bg-white font-poppins p-2 flex justify-center items-center w-full hover:bg-gray-300">
						Submit
					</button>
				</div>

				<FooterList title={"Smart Links"} data={FooterDataQuickLinks} />
			</div>

			<div className="w-full flex items-center justify-center mt-8">
				<span className="text-white font-poppins text-center">
					© 2024 Identitie Enrichment Pte Ltd. All Rights Reserved.
				</span>
			</div>
		</div>
	);
};

export default Footer;
