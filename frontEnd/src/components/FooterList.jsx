import React from "react";

const FooterList = ({ title, data }) => {
	return (
		<div>
			<span className="text-white text-lg font-semibold lg:text-xl font-poppins">{title}</span>
			<div className="md:space-y-2 mt-2 space-y-2 lg:mt-6 lg:flex lg:flex-wrap grid grid-cols-2  md:flex-col items-center gap-5 md:gap-0 md:items-start">
				{data?.map(item => <a href={item.link} className="text-white transition whitespace-nowrap duration-300 hover:scale-110">&rarr; {item.title}</a>)}
			</div>
		</div>
	);
};

export default FooterList;
