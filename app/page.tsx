"use client";
import Download from "@/components/Download";
import { FeaturesSectionDemo } from "@/components/FeaturesDemo";
import Footer from "@/components/Footer";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
	return (
		<main className="bg-black relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
			<FloatingNav navItems={navItems} />
			<HeroScrollDemo />
			<Download />
			<FeaturesSectionDemo />
			<InfiniteMovingCardsDemo />
			<Footer />
		</main>
	);
}
