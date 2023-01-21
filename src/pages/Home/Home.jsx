import { Container } from "../../layouts";
import { Contact, Coverage, Footer, Hero, Plans } from "./components";

const Home = () => {
	return (
		<main className="bg-blue-50">
			<Hero />
			<Plans />
			<Coverage />
			<Contact />
			<Footer />
		</main>
	);
};

export default Home;
