"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
	return (
		<div
			className="w-full h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
			id="reviews"
		>
			<div className="px-8 max-w-xl sm:max-w-max">
				<h1 className="text-4xl text-wrap lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white">
					Kind words from{" "}
					<span className="text-red-700 font-bold">our customers</span>
				</h1>
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
			</div>
		</div>
	);
}

const testimonials = [
	{
		profilePic:
			"https://lh3.googleusercontent.com/a/ACg8ocLLAlrgZivuRKuHphPPPEl5eRSjLBz7U4cvFqkO8VoUb6exEA=s48-w48-h48",
		username: "Lumina",
		rating: "5 out of 5 stars",
		date: "Aug 19, 2024",
		reviewText:
			"Fantastic! It skips intros and episodes effortlessly, making binge-watching a breeze. Super easy to use and it just works—love it!",
	},
	{
		profilePic:
			"https://lh3.googleusercontent.com/a-/ALV-UjWffiHY4nG88Qo4DdzJZOK3zaAYd-VmhtrYFt3Dkk6QLKM_Bes=s48-w48-h48",
		username: "Anisole Anime2",
		rating: "5 out of 5 stars",
		date: "Aug 19, 2024",
		reviewText: "Please create another one for Peacock and Hulu!",
	},
	{
		profilePic:
			"https://lh3.googleusercontent.com/a-/ALV-UjVYLJpfapRYQVPXxlNvaDez9nqN5zVk4bqI28aLNGUpM8EpERs=s48-w48-h48",
		username: "Anisole Anime",
		rating: "5 out of 5 stars",
		date: "Aug 19, 2024",
		reviewText: "Great Extension! Simple but very effective",
	},
];
