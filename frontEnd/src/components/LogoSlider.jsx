import React from "react";

const LogoSlider = () => {
	return (
		<div className="flex  justify-center items-center  mt-8 w-full">
			
			<div className="font-poppins">

				<h1 className="text-center hidden text-xl font-bold underline underline-offset-8 ">Meet Our Partners</h1>
				<div></div>
				<div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-40px),transparent_100%)] space-x-4  group ">
					<div className=" font-roboto grayscale  font-bold text-xl flex  space-x-4 pt-2 opacity-100 pb-7 group-hover:paused items-center flex-wrap justify-center md:flex-nowrap">
						<img className="h-6 8 lg:h-6 8 object-contain   12" src="../assets/optimized/lazada.png" alt="log" />
						<img className="h-6 16 lg:h-6 8 object-contain 16  20" src="../assets/optimized/tiktok.png" alt="log" />
						<img className="h-6 12 lg:h-6 8 object-contain 16  16" src="../assets/optimized/cocomo.png" alt="log" />
						<img className="h-6 8 lg:h-6 8 object-contain 16  12" src="../assets/optimized/Shopee.png" alt="log" />
						<img className="h-6 8 lg:h-6 8 object-contain 16  12" src="../assets/optimized/shopify-logo.png" alt="log" />
						<img className="h-6 8 lg:h-6 8 object-contain 16  12" src="../assets/optimized/qu10.png" alt="log" />
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default LogoSlider;
