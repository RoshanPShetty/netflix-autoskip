import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Reviews />
			<Contact />
		</div>
	);
}
