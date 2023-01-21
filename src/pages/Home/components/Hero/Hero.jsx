import { Container } from "../../../../layouts";
import heroImage from "../../../../assets/hero-image.svg";

const Hero = () => {
	return (
		<section
			id="hero"
			className="bg-gradient-to-t from-blue-600 to-blue-700 py-12 sm:py-10 lg:py-16">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="flex flex-col items-center">
						<span className="mb-3 text-sm font-bold tracking-widest text-sky-300 uppercase text-center">
							Aprovecha nuestras ofertas del momento y cámbiate a
						</span>
						<div className="rounded-2xl bg-blue-900/60 text-orange-50 py-2 px-6 font-semibold mb-4">
							<p>Internet 100% fibra óptica</p>
						</div>
						<h2 className="text-blue-50 text italic text-6xl font-black text-center mb-5">
							Con{" "}
							<span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
								más velocidad
							</span>
							<br />y mejores precios
						</h2>
						<p className="text-sky-300 text-xl font-semibold mb-6 mt-3 flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6">
								<path
									fillRule="evenodd"
									d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
									clipRule="evenodd"
								/>
							</svg>
							Conoce nuestro planes
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6">
								<path
									fillRule="evenodd"
									d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
									clipRule="evenodd"
								/>
							</svg>
						</p>
						<div className="flex gap-4">
							<button className="flex gap-1 bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-orange-500 shadow-sm hover:-translate-y-1 transition">
								Me interesa
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
									/>
								</svg>
							</button>
							<button className="flex gap-1 bg-blue-700/40 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 shadow-sm hover:-translate-y-1 transition">
								Cobertura
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-[650px] lg:w-full">
							<img
								className="object-cover object-center"
								alt="heroImage"
								src={heroImage}
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
