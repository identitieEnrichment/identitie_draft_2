import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import useIsMobile from "../hooks/useIsMobile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../utils/data";
const UserTestimonials = () => {
	const isMobile = useIsMobile();
	console.log(isMobile);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1, // Show one card at a time
		slidesToScroll: 1,
		autoplay: true, // Enable autoplay on mobile devices
		autoplaySpeed: 3000,
	};
	return (
		<div className="lg:py-10 pb-10   lg:-mt-56   ">
			<h1 className="lg:text-4xl bg-transparent pl-2 text-2xl flex pt-10 mb-8 justify-center items-center font-bold font-koulen tracking-wider text-[#ed1e24]">
				WHAT OUR CLIENTS SAY
			</h1>
			<div className="lg:flex lg:space-x-4 w-full px-10 lg:px-0 overflow-hidden ">
				{isMobile ? (
					// Render TestimonialsCard components inside Slider on mobile devices
					<Slider {...settings}>
						{testimonials.map((item) => (
							<TestimonialsCard data={item} />
						))}
					</Slider>
				) : (
					<>
						<div className="mt-10 flex space-x-4 animate-loop-scroll  ">
							{testimonials.map((item) => (
								<TestimonialsCard data={item} />
							))}
						</div>
						<div className="mt-10 flex space-x-4 animate-loop-scroll  ">
							{testimonials.map((item) => (
								<TestimonialsCard data={item} />
							))}
						</div>
					</>
				)}
			</div>
			<div className=" space-x-4 w-full overflow-hidden mt-2 hidden lg:flex">
				<div className="mt-10 flex space-x-4  animate-loop-scroll-reverse  ">
					{testimonials.map((item) => (
						<TestimonialsCard data={item} />
					))}
				</div>
				<div className="mt-10 flex space-x-4 animate-loop-scroll-reverse ">
					{testimonials.map((item) => (
						<TestimonialsCard data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default UserTestimonials;
