import Head from "next/head";
import NavBar from "../components/app/NavBar/NavBar";
import CommunitySection from "../sections/CommunitySection/CommunitySection";
import HomeSection from "../sections/Home/HomeSection";
import LocationSection from "../sections/LocationSection/LocationSection";
import OurMenuSection from "../sections/OurMenuSection/OurMenuSection";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<NavBar />
				<HomeSection />
				<CommunitySection />
				<LocationSection />
				<OurMenuSection />
			</main>

			<footer />
		</div>
	);
}
