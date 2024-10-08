"use client";
import Image from "next/image";
import ArrowDown from "../public/arrow-down.svg";
import { sendGAEvent } from "@next/third-parties/google";

const Hero = () => {
	return (
		<div
			className="py-32 md:py-48 m-h-screen lg:py-60 overflow-x-clip relative inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
			id="home"
		>
			<div className="container z-20">
				<div className="flex flex-col items-center">
					<Image
						src="/logo.png"
						alt="hero"
						width={1920}
						height={1080}
						className="size-[100px]"
					/>
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
						Effortless Streaming, Anytime
					</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						Transform your Netflix experience with{" "}
						<span className="n-gradient text-transparent bg-clip-text">
							Netflix AutoSkip
						</span>{" "}
						— Automatically skip intros, episodes, and more for uninterrupted,
						customized viewing pleasure.
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
					<a
						href="https://chromewebstore.google.com/detail/netflix-autoskip/ccneeceepbhmgaonnhcbhbmhfomnpnfh"
						target="_blank"
						className="inline-flex items-center gap-2 n-gradient  px-10 h-12 rounded-xl z-30"
						onClick={() =>
							sendGAEvent("file_download", "Click", {
								value: "chrome_extension",
							})
						}
					>
						<span className="font-semibold">Install Extension</span>
						<Image src="/chrome.svg" alt="chrome" width={20} height={20} />
					</a>
					{/* <a
						href="#features"
						className="inline-flex items-center gap-2 border border-white/15 px-10 h-12 rounded-xl z-30"
					> */}
					{/* <span className="font-semibold">Learn More</span>
						<ArrowDown className="size-4" /> */}
					<a
						href="https://www.producthunt.com/posts/netflix-autoskip?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-netflix&#0045;autoskip"
						target="_blank"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=485989&theme=dark"
							alt="Netflix&#0032;AutoSkip - Automatically&#0032;skip&#0032;intros&#0032;and&#0032;dive&#0032;into&#0032;the&#0032;next&#0032;episode | Product Hunt"
							width="250"
							height="54"
						/>
					</a>
					{/* </a> */}
				</div>
			</div>
		</div>
	);
};

export default Hero;
