import React from "react";

const FooterList = ({ title, data }) => {
	return (
		<div>
			<span className="text-white text-xl font-poppins">{title}</span>
			<div className="space-y-2 mt-6 flex flex-col">
				{data?.map(item => <a href={item.link} className="text-white transition duration-300 hover:scale-110">&rarr; {item.title}</a>)}
			</div>
		</div>
	);
};

export default FooterList;
