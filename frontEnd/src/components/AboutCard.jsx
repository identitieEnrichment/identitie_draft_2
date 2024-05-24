import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutCard = ({Data,index}) => {
	return (
		<div  className={`${'aboutcard'+index} border-black border-2  w-full flex cursor-pointer`}>
			<div className="flex flex-col justify-between space-y-2 p-4 px-6 ">
				<div className="flex items-center gap-3">
					<div className="rounded-full h-4 w-4 bg-black transition-colors duration-1000"></div>
					<span className="font-koulen text-4xl  transition-colors duration-1000">{Data?.title}</span>
				</div>
				<p className=" ">
					{Data.description}
				</p>
                
				<button className="border-2 border-white hidden group-hover:block rounded-full p-2 px-6 font-poppins text-white w-max">
					LEARN MORE
				</button>
				<button className="rounded-full h-10 w-10 border-2 border-black flex group-hover:hidden justify-center items-center transition-transform duration-1000">
					<IoIosArrowRoundForward className="text-3xl" />
				</button>
			</div>
		</div>
	);
};

export default AboutCard;