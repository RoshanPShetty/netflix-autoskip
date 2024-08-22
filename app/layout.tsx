import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Netflix AutoSkuo",
	description:
		"Enhance your Netflix experience by automatically skipping intros and navigating to the next episode with AutoSkip.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					"bg-black text-white antialiased font-sans"
				)}
			>
        {children}
        <Analytics />
				<GoogleAnalytics gaId="G-7GWQC7WPKN" />
			</body>
		</html>
	);
}
