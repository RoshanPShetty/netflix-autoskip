import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Netflix AutoSkip",
	description:
		"Enhance your Netflix experience by automatically skipping intros and navigating to the next episode with AutoSkip.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				{/* <Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-7GWQC7WPKN"
				></Script>
				<Script id="google-analytics">
					{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7GWQC7WPKN');`}
				</Script> */}
			</head>
			<body className={inter.className}>
				{children}
				<Analytics />
				<GoogleAnalytics gaId="G-7GWQC7WPKN" />
			</body>
		</html>
	);
}
