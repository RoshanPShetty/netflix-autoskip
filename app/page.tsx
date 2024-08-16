"use client";
import Download from "@/components/Download";
import { FeaturesSectionDemo } from "@/components/FeaturesDemo";
import Footer from "@/components/Footer";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

export default function Home() {
	return (
		<main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
			<HeroScrollDemo />
			<Download />
			<FeaturesSectionDemo />
			<InfiniteMovingCardsDemo />
			<Footer />
		</main>
	);
}
