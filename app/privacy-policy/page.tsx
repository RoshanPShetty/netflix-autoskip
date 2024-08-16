const PrivacyPolicy = () => {
	return (
		<div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
				<h1 className="text-3xl font-bold text-gray-900 mb-6">
					Privacy Policy for AutoSkip
				</h1>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						1. Introduction
					</h2>
					<p className="text-gray-700 mt-2">
						AutoSkip is a Chrome extension that enhances the Netflix viewing
						experience by automatically skipping intros and transitioning to the
						next episode based on user preferences. This privacy policy explains
						how we handle your data when you use our extension.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						2. Information We Collect
					</h2>
					<p className="text-gray-700 mt-2">
						AutoSkip collects minimal information, specifically:
					</p>
					<ul className="list-disc list-inside mt-2 text-gray-700">
						<li>
							<strong>User Preferences</strong>: We store the settings you
							choose within the extension, such as whether to skip intros or
							automatically play the next episode. These preferences are stored
							locally on your device using Chrome&apos;s storage API.
						</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						3. How We Use Your Information
					</h2>
					<p className="text-gray-700 mt-2">
						The information we collect is used solely for the purpose of
						providing and improving the functionality of the AutoSkip extension.
						Specifically:
					</p>
					<ul className="list-disc list-inside mt-2 text-gray-700">
						<li>
							<strong>Storage of Preferences</strong>: Your settings are saved
							to ensure that your preferences are maintained across browser
							sessions.
						</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						4. Data Sharing and Disclosure
					</h2>
					<p className="text-gray-700 mt-2">
						We do not share, sell, or transfer your information to any third
						parties. The data collected by AutoSkip remains on your local device
						and is not transmitted to any external servers.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						5. Data Security
					</h2>
					<p className="text-gray-700 mt-2">
						We take the security of your data seriously. The extension uses
						Chrome’s built-in storage mechanisms, which are protected by the
						security features of your browser. Since no data is transmitted
						outside your device, the risk of data breaches is minimized.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800">
						6. Changes to This Privacy Policy
					</h2>
					<p className="text-gray-700 mt-2">
						We may update this privacy policy from time to time to reflect
						changes in our practices or legal obligations. Any changes will be
						posted within the extension&apos;s details page in the Chrome Web
						Store.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-gray-800">
						7. Contact Us
					</h2>
					<p className="text-gray-700 mt-2">
						If you have any questions or concerns about this privacy policy,
						please contact us through{" "}
						<a
							href="mailto:roshanshetty2000@gmail.com"
							className="text-blue-600 underline"
						>
							email
						</a>
						.
					</p>
				</section>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
