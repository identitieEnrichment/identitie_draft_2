import React from "react";

const ProductsCard = ({title,description}) => {
	return (
		<div className="flex flex-col items-center justify-center p-8 gap-6">
			<h1 className="text-4xl font-semibold">{title}</h1>
			<p className=" text-center">{description}</p>
			<button className="px-12 rounded-full p-2.5 text-white bg-blue-500">
				Lets Explore
			</button>
		</div>
	);
};

export default ProductsCard;
