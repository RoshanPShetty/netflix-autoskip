"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
	return (
		<div className="w-full h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" id="reviews">
			<div className="px-4">
				<h1 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white">
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
		review:
			"This extension is a game-changer for binge-watchers. It seamlessly skips intros and takes you straight to the next episode, making my Netflix experience much smoother. Highly recommended!",
		reviewer: "John Doe",
		rating: 5,
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "August 10, 2024",
	},

	{
		review:
			"I love how this extension automatically skips the intros and even handles the next episode navigation. It saves me so much time. The feature toggles are very useful, and the setup was straightforward.",
		reviewer: "Jane Smith",
		rating: 4,
		avatar:
			"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "August 12, 2024",
	},

	{
		review:
			"AutoSkip is fantastic! It works perfectly for skipping intros and moving to the next episode without any hassle. The only improvement could be better support for more streaming platforms.",
		reviewer: "Alex Johnson",
		rating: 4,
		avatar:
			"https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "August 15, 2024",
	},

	{
		review:
			"A must-have for any Netflix user. This extension does exactly what it promises—skips intros and transitions to the next episode. It's made my streaming experience so much more enjoyable.",
		reviewer: "Emily Davis",
		rating: 5,
		avatar:
			"https://images.unsplash.com/photo-1543949806-2c9935e6aa78?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "August 20, 2024",
	},
]