import { useState } from "react";
import { Navbar } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navbar isOpen={isOpen} toggle={toggle} />
			<Home />
		</>
	);
}

export default App;
