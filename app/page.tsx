"use client";
import { FeaturesSectionDemo } from "@/components/FeaturesDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";

export default function Home() {
	return (
		<main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
			<HeroScrollDemo />
			<FeaturesSectionDemo />
		</main>
	);
}
