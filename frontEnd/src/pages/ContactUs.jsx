import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const ContactUs = () => {
	return (
		<div className="p-6 lg:px-32 bg-black text-gray-400 ">
			<div className="space-y-3">
				<h1 className="font-koulen text-4xl">What’s On Your Mind?</h1>
				<p className="font-poppins">
					{" "}
					Share your thoughts or questions, and let’s start a conversation…
				</p>
			</div>
			<div className="flex mt-2 md:gap-10 w-full md:flex-row flex-col-reverse">
				<div className="w-full">
					<img
						className="h-[60vh] object-cover  w-11/12 opacity-80 rounded-3xl hidden md:block"
						src="../assets/optimized/contactus-optimized.png"
						alt="contact"
					/>
					{/* <div className="mt-12 grid md:grid-cols-2 gap-5">
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
					</div> */}
				</div>
				<div className="w-full">
					<form
						action="https://api.web3forms.com/submit"
						method="POST"
						className="space-y-5 pt-6 md:pt-0">
						<input hidden name="redirect" value="/" />
						<input
							type="hidden"
							name="access_key"
							value="71e40aaf-1327-4dbd-89ce-a3894eb838e5"
						/>
						<input
							hidden
							name="access_key"
							value={"5df84430-8f84-4448-92ae-2362d5a20571"}></input>
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
						<div>
							<button
								type="submit"
								class="rounded-full p-2 md:hover:before:bg-[#ed1e24] md:relative md:h-[40px] md:w-40 md:overflow-hidden border border-[#57606a] bg-transparent px-3 text-white shadow-2xl transition-all md:before:absolute md:before:bottom-0 md:before:left-0 md:before:top-0 md:before:z-0 before:h-full md:before:w-0 md:before:bg-[#ed1e24] before:transition-all before:duration-500 hover:text-white hover:shadow-[#ed1e24] hover:before:left-0 hover:before:w-full ">
								<span class="md:relative md:z-50 md:whitespace-nowrap px-2">
								Send Now
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
