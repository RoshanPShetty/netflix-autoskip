import { socialMedia } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
	return (
		<footer className="w-full py-10 mb-1" id="contact">
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Have a <span className="text-red-700">feature</span> in mind?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					We’re always looking to improve! Let’s work together to make Netflix
					AutoSkip even better.
				</p>
				<a href="mailto:roshanshetty2000@gmail.com">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>

			<div className="flex mt-16 sm:flex-row flex-col justify-between sm:items-end items-center  border-t-2 border-t-white sm:border-hidden">
				<p className="mt-4 md:text-base text-sm md:font-normal font-light flex sm:items-end sm:flex-row flex-col items-center mb-2 sm:mb-0">
					<img src="/logo.png" alt="" className="mr-4 h-8 mb-2 sm:mb-0" />
					Copyright © 2024 Roshan Praveen Shetty
				</p>
				<a href="/privacy-policy" className="text-white-200" target="_blank">
					Privacy and Policy
				</a>
				<div className="sm:flex sm:items-center md:gap-3 gap-6 mt-5">
					{socialMedia.map((profile) => (
						<a href={profile.link} key={profile.id}>
							<div
								key={profile.id}
								className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
							>
								<Image
									src={profile.img}
									alt={profile.id.toString()}
									width={20}
									height={20}
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
