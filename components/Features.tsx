"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BounceCard = ({
	className,
	children,
}: {
	className: string;
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			whileHover={{ scale: 0.95, rotate: "-1deg" }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl  border-white/15 bg-white/10 p-8 ${className}`}
		>
			{children}
		</motion.div>
	);
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="font-serif mx-auto text-center text-3xl font-semibold">
			{children}
		</h3>
	);
};

const Features = () => {
	const [isSelected, setSelected] = useState(false);
	const [isSelectedRecap, setSelectedRecap] = useState(false);

	return (
		<div className="container" id="features">
			<div className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest n-gradient text-transparent bg-clip-text">
					Real-World Impact
				</p>
			</div>
			<h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-6">
				Highlighted Features
			</h2>

			<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
				See how Netflix AutoSkip enhances your streaming with smart, intuitive
				controls.
			</p>
			<section className="mx-auto max-w-7xl px-4 py-12">
				<div className="mb-4 grid grid-cols-12 gap-4">
					<BounceCard className="col-span-12 md:col-span-4 n-gradient">
						<CardTitle>Seamless Intro Skipping</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-indigo-50 uppercase">
								Skip intros with one toggle.
							</span>
							<div className="flex gap-4 px-5 pt-4 items-center justify-between rounded-3xl">
								<span className="text-lg text-indigo-50">Skip Intros</span>
								<div
									className={`cursor-pointer w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 ${
										isSelected ? "bg-red-500 justify-end" : "justify-start"
									}`}
									onClick={() => setSelected(!isSelected)}
								>
									<motion.div
										layout
										className="bg-white w-8 h-8 rounded-full shadow-md"
									></motion.div>
								</div>
							</div>
							<div className="flex gap-4 px-5 pt-4 items-center justify-between rounded-3xl">
								<span className="text-lg text-indigo-50">Skip Recap</span>
								<div
									className={`cursor-pointer w-16 h-10 flex items-start bg-gray-300 rounded-full p-1 ${
										isSelectedRecap ? "bg-red-500 justify-end" : "justify-start"
									}`}
									onClick={() => setSelectedRecap(!isSelectedRecap)}
								>
									<motion.div
										layout
										className="bg-white w-8 h-8 rounded-full shadow-md"
									></motion.div>
								</div>
							</div>
						</div>
					</BounceCard>
					<BounceCard className="col-span-12 md:col-span-8">
						<CardTitle>Effortless Episode Navigation</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-orange-50 uppercase">
								Instantly jump to the next episode.
							</span>
							<Image
								src="/laptop.jpg"
								alt="laptop"
								width={1920}
								height={1080}
								className="mt-4 w-full h-full object-cover rounded-t-2xl"
							/>
						</div>
					</BounceCard>
				</div>
				<div className="grid grid-cols-12 gap-4">
					<BounceCard className="col-span-12 md:col-span-8">
						<CardTitle>Smart Skip Controls</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-emerald-50 uppercase">
								Customize skips with precise settings.
							</span>
							<Image
								src="/custom.jpg"
								alt="laptop"
								width={1920}
								height={1080}
								className="mt-4 w-full h-full object-cover rounded-t-2xl"
							/>
						</div>
					</BounceCard>

					<BounceCard className="col-span-12 md:col-span-4 n-gradient">
						<CardTitle>One-Click Installation</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-red-50 uppercase">
								Quick setup via Chrome/Firefox.
							</span>
							<div className="flex gap-8 items-center justify-center">
								<a
									href="https://chromewebstore.google.com/detail/netflix-autoskip/ccneeceepbhmgaonnhcbhbmhfomnpnfh"
									target="_blank"
								>
									<Image
										src="/chrome.svg"
										alt="chrome"
										width={1920}
										height={1080}
										className="mt-4 size-28"
									/>
								</a>
								<a
									href="https://addons.mozilla.org/en-US/firefox/addon/netflix-autoskip/"
									target="_blank"
								>
									<Image
										src="/firefox.svg"
										alt="firefox"
										width={1920}
										height={1080}
										className="mt-4 size-28"
									/>
								</a>
							</div>
						</div>
					</BounceCard>
				</div>
			</section>
		</div>
	);
};

export default Features;
