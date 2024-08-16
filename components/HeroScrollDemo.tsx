"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "./ui/ContainerScroll";

export function HeroScrollDemo() {
	return (
		<div className="flex flex-col overflow-hidden" id="about">
			<ContainerScroll
				titleComponent={
					<div className="items-center flex flex-col">
						{/* <img src="/logo.png" alt="" className="h-36 " /> */}
						<>
							<h1 className="text-4xl font-semibold text-black dark:text-white">
								Unlock Seamless Streaming with
								<br />
								<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-red-700 sm:flex sm:items-center">
									Netflix AutoSkip{" "}
									<img src="/logo.png" alt="" className=" sm:block hidden h-28 ml-4" />
								</span>
							</h1>
						</>
					</div>
				}
			>
				<img
					src={`/1.png`}
					alt="hero"
					height={720}
					width={1400}
					className="mx-auto rounded-2xl object-cover sm:object-fit h-full object-left-top"
					draggable={false}
				/>
			</ContainerScroll>
		</div>
	);
}
