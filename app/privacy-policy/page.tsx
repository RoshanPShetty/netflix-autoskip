"use client";
import { socials } from "@/data";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import ArrowUpRight from "../../public/arrow-up-right.svg";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
	return (
		<div className="">
			<div className="mx-auto py-16 px-6 md:px-12 lg:px-24">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white mb-6">
						Privacy Policy
					</h1>
					<p className="text-lg text-white/80">
						Your privacy is important to us. This policy explains how we handle
						and use your personal information.
					</p>
				</motion.div>

				<div className="mt-12 space-y-8 text-white/80">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">
							1. Information Collection
						</h2>
						<p>
							We collect various types of information in connection with the
							services we provide, including your name, email address, and usage
							data.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">2. Use of Information</h2>
						<p>
							The information we collect is used to provide, maintain, and
							improve our services, as well as to communicate with you and
							understand how our services are used.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">3. Information Sharing</h2>
						<p>
							We do not share your personal information with third parties
							except as necessary to provide our services, comply with the law,
							or protect our rights.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">4. Security</h2>
						<p>
							We take reasonable measures to protect your information from
							unauthorized access, use, or disclosure.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">5. Your Choices</h2>
						<p>
							You have choices regarding your information, including the ability
							to opt-out of certain communications and request access to or
							deletion of your information.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.2 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">
							6. Changes to This Policy
						</h2>
						<p>
							We may update this policy from time to time. We will notify you of
							any significant changes by posting the new policy on our website.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.4 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-semibold">7. Contact Us</h2>
						<p>
							If you have any questions or concerns about this privacy policy,
							please contact us at [your-email@example.com].
						</p>
					</motion.div>
				</div>
			</div>
			<div className="container border-t border-t-white/30 mt-16 pt-8">
				<div className="flex justify-between items-center">
					<p className="text-white/50">
						Created by{" "}
						<a
							href="https://x.com/roshanpshetty"
							target="_blank"
							className="text-white"

						>
							@roshanpshetty
						</a>
					</p>
					<div className="flex gap-8 sm:mt-4 md:mt-0 lg:mt-0  sm:hidden lg:block ">
						{socials.map(
							(social) =>
								social.name !== "Privacy" && (
									<a
										href={social.link}
										target="_blank"
										key={social.id}
										className="ml-4"
									>
										{social.name}{" "}
										<ArrowUpRight className="size-5 inline-flex" />
									</a>
								)
						)}
						<a href={"/"} className="ml-4">
							Home <ArrowUpRight className="size-5 inline-flex" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
