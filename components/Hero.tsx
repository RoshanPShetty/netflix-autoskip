import Image from "next/image";
import ArrowDown from "../public/arrow-down.svg";
import grainImage from "../public/grain.jpg";

const Hero = () => {
	return (
		<div
			className="py-32 md:py-48 lg:py-60 relative z-10 overflow-x-clip"
			id="home"
		>
			<div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] z-0">
				<div
					className="absolute inset-0 -z-30 opacity-5"
					style={{
						backgroundImage: `url(${grainImage.src})`,
					}}
				></div>
			</div>
			<div className="container z-20">
				<div className="flex flex-col items-center">
					<Image
						src="/logo.png"
						alt="hero"
						width={1920}
						height={1080}
						className="size-[100px]"
					/>
					{/* <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
						<div className="relative">
							<div className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></div>
							<div className="relative bg-green-500 size-2.5 rounded-full"></div>
						</div>
						<div className="text-sm font-medium">
							Available on Chrome Web Store
						</div>
					</div> */}
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
						Effortless Streaming, Anytime
					</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						Transform your Netflix experience with Netflix
						AutoSkip—automatically skip intros, episodes, and more for
						uninterrupted, customized viewing pleasure.
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
					<a
						href="https://chromewebstore.google.com/detail/netflix-autoskip/ccneeceepbhmgaonnhcbhbmhfomnpnfh"
						target="_blank"
						className="inline-flex items-center gap-2 n-gradient  px-10 h-12 rounded-xl z-30"
					>
						<span className="font-semibold">Install Extension</span>
						<Image src="/chrome.svg" alt="chrome" width={20} height={20} />
					</a>
					<a
						href="#features"
						className="inline-flex items-center gap-2 border border-white/15 px-10 h-12 rounded-xl z-30"
					>
						<span className="font-semibold">Learn More</span>
						<ArrowDown className="size-4" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
