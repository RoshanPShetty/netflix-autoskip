import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaChrome, FaLocationArrow } from "react-icons/fa";

const Download = () => {
	return (
		<div
			className="dark:bg-black dark:bg-grid-white/[0.05] w-screen p-20 flex flex-col items-center"
			id="download"
		>
			<h1 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white">
				Transform Your <span className="text-red-700 font-bold">Netflix</span>{" "}
				Experience Today!
			</h1>
			<p className="text-sm mb-5 lg:text-base  max-w-2xl  mt-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
				Download AutoSkip on the Chrome Web Store and never miss a beat. Enjoy
				seamless streaming with just a click!
			</p>
			<a href="/" >
				<MagicButton
					title="Install Now"
					icon={<FaChrome />}
					position="right"
					otherClasses="text-xl"
				/>
			</a>
		</div>
	);
};

export default Download;
