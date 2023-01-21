import { Link } from "react-scroll";
import { Container } from "../../layouts";

const navbarData = [
	{
		name: "Inicio",
		toScroll: "hero",
	},
	{
		name: "Planes",
		toScroll: "plans",
	},
	{
		name: "Cobertura",
		toScroll: "coverage",
	},
	{
		name: "Contacto",
		toScroll: "contact",
	},
];

const Navbar = ({ isOpen, toggle }) => {
	return (
		<nav className="bg-blue-700">
			<Container>
				<header>
					<div className="max-w-7xl">
						<nav className="flex items-center justify-between h-16 lg:h-20">
							<div className="flex-shrink-0">
								<Link to="hero" className="flex cursor-pointer">
									<img
										className="w-auto h-8 lg:h-10"
										src="https://res.cloudinary.com/ddvnb3fp2/image/upload/v1674230093/tvcapece/logo-tvcapece_l27qfx.png"
										alt="Logo"
									/>
								</Link>
							</div>

							<button
								onClick={toggle}
								type="button"
								className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-blue-900 hover:bg-blue-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-7 h-7">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>

							<ul className="hidden md:flex md:items-center md:space-x-12">
								{navbarData.map((item) => (
									<li key={item.name}>
										<Link
											to={item.toScroll}
											className="text-base font-medium text-white transition-all duration-200 lg:text-base hover:text-sky-300 focus:text-sky-300 cursor-pointer">
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						{isOpen && (
							<nav className="min-h-screen px-4 py-10 text-center bg-blue-800 rounded-md md:hidden">
								<button
									type="button"
									className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-blue-900 hover:bg-blue-900">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-7 h-7">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
								<ul className="flex flex-col items-center mt-10 space-y-10">
									{navbarData.map((item) => (
										<li key={item.name}>
											<Link
												to={item.toScroll}
												className="p-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 cursor-pointer">
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						)}
					</div>
				</header>
			</Container>
		</nav>
	);
};

export default Navbar;
