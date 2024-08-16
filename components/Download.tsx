import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Download = () => {
	return (
		<div className="flex flex-col items-center" id="download">
			<h1 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white">
				Transform Your <span className="text-red-700 font-bold">Netflix</span>{" "}
				Experience Today!
			</h1>
			<p className="text-sm lg:text-base  max-w-2xl  mt-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
				Download AutoSkip on the Chrome Web Store and never miss a beat. Enjoy
				seamless streaming with just a click!
			</p>
			<a href="/">
				<MagicButton
					title="Install Now"
					icon={<FaLocationArrow />}
					position="right"
				/>
			</a>
		</div>
	);
};

export default Download;
