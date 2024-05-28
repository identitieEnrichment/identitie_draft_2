import React from "react";

const LogoSlider = () => {
	return (
		<div className="flex justify-center items-center md:mt-20 md:absolute bottom-3 md:bottom-4 mt-8 w-full md:left-[90%]">
			
			<div className="md:max-w-[38rem] max-w-full">
				<div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-40px),transparent_100%)] space-x-4 md:mx-16 group ">
					<div className=" font-roboto font-bold text-xl flex  space-x-4 pt-2 opacity-100 pb-7 animate-loop-scroll group-hover:paused">
						<p className="">COCOMO</p>
						<p className="">SHOPIFY</p>
						<p className="">JEFHLY</p>
						<p className="">QOO10</p>
						<p className="">LAZADA</p>
					</div>
					<div
						className=" font-roboto font-bold  text-xl flex  space-x-4 pt-2 opacity-100 pb-7 animate-loop-scroll group-hover:pause"
						aria-hidden="true">
						<p className="">COCOMO</p>
						<p className="">SHOPIFY</p>
						<p className="">JEFHLY</p>
						<p className="">QOO10</p>
						<p className="">LAZADA</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoSlider;
