import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const ContactUs = () => {
	return (
		<div className="p-6 lg:px-32 bg-black text-gray-400 ">
			<div className="space-y-3">
				<h1 className="font-koulen text-4xl">LET'S CONNECT</h1>
				<p className="font-poppins">
					{" "}
					Reach out to us and lets dive into insights togeter
				</p>
			</div>
			<div className="flex mt-2 md:gap-10 w-full md:flex-row flex-col-reverse">
				<div className="w-full">
					<img
						className="h-96 object-cover w-full rounded-3xl hidden md:block"
						src="../assets/optimized/contactus-optimized.png"
						alt="contact"
					/>
					<div className="mt-12 grid md:grid-cols-2 gap-5">
						<div className="flex gap-4">
							<div className="rounded-lg p-3 h-12 w-12 bg-black flex justify-center items-center">
								<FaPhoneAlt className="text-white text-3xl" />
							</div>
							<div>
								<h2 className="font-poppins font-bold text-lg">Contact</h2>
								<span>Identitie.enrichment@gmail.com</span>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="rounded-lg p-3 h-12 w-12 bg-black flex justify-center items-center">
								<FaRegClock className="text-white text-3xl" />
							</div>
							<div>
								<h2 className="font-poppins font-bold text-lg">Working Hour</h2>
								<span>Mon - Sat: 9.30am to 6.30pm</span>
							</div>
						</div>
					</div>
					<div className="flex gap-4 mt-4">
						<div className="rounded-lg p-3 h-12 w-12 bg-black flex justify-center items-center">
							<FaMapMarkerAlt className="text-white text-3xl" />
						</div>
						<div>
							<h2 className="font-poppins font-bold text-lg">Our Office</h2>
							<span className="text-sm font-poppins">
								7/14A, 3rd Cross Street Venkateshwara Nagar, Karpagam Garden
								Chennai, Adyar 600020
							</span>
						</div>
					</div>
				</div>
				<div className="w-full">
					<form action="https://api.web3forms.com/submit" method="POST" className="space-y-5 pt-6">
					<input hidden name="access_key" value={"5df84430-8f84-4448-92ae-2362d5a20571"}></input>
						<input
							name="name"
							className="rounded-md p-3 bg-black  border  border-[#57606a]  md:w-9/12 w-full"
							placeholder="Your Name"
							required
						/>
						<input
							className="rounded-md p-3 bg-black  border  border-[#57606a] md:w-9/12 w-full"
							placeholder="Your Email"
							required
							name="email"
							type="email"
						/>
						<input
							name="subject"
							required
							className="rounded-md p-3 bg-black  border  border-[#57606a]  md:w-9/12 w-full"
							placeholder="Subject"
						/>
						<textarea
							className="rounded-md p-3 bg-black  border  border-[#57606a] md:w-9/12 h-44 w-full"
							placeholder="Message"
							required
							name="message"
						/>
						<button type="submit" class="rounded-full mt-8 hover:before:bg-[#773ec7] relative h-[40px] w-40 overflow-hidden border border-[#57606a] bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#773ec7] before:transition-all before:duration-500 hover:text-white hover:shadow-[#773ec7] hover:before:left-0 hover:before:w-full ">
							<span class="relative z-50 whitespace-nowrap px-2">
								Send Message
							</span>
						
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
