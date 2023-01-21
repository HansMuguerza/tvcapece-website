import { BeakerIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { Container } from "../../../../layouts";

const plansData = [
	{
		mbps: "20",
		price: "50",
		recommended: false,
	},
	{
		mbps: "25",
		price: "70",
		recommended: true,
	},
	{
		mbps: "30",
		price: "90",
		recommended: false,
	},
];

const Plans = () => {
	return (
		<section id="plans" className="py-16 sm:py-10 lg:py-13">
			<Container>
				<div className="flex flex-col items-center">
					<div>
						<h2 className="text-blue-600 text-center font-extrabold text-4xl md:text-5xl mb-2">
							El plan adecuado a tu elección
						</h2>
						<p className="text-sky-500 text-center font-bold text-2xl md:text-3xl">
							¡Sin costo de instalación!
						</p>
					</div>
					<div className=" my-8">
						<ul className="text-sm font-medium text-center text-blue-700 divide-x-4 divide-transparent rounded-2xl flex">
							<li className="w-full">
								<button
									href="#"
									className="inline-block w-full py-3 px-7  bg-blue-100 hover:text-blue-50 hover:bg-blue-800 text-base rounded-l-2xl focus:ring-4 focus:ring-blue-300 active focus:outline-none transition"
									aria-current="page">
									Duo
								</button>
							</li>
							<li className="w-full">
								<button
									href="#"
									className="inline-block w-full py-3 px-7 text-white bg-blue-700 text-base hover:text-blue-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none transition">
									Internet
								</button>
							</li>
							<li className="w-full">
								<button
									href="#"
									className="inline-block w-full py-3 px-7 bg-blue-100 rounded-r-2xl text-base hover:text-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition">
									Cable
								</button>
							</li>
						</ul>
					</div>
					<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{plansData &&
							plansData.map((item) => (
								<article
									key={item.mbps}
									className={`w-80 overflow-hidden bg-blue-100 rounded-2xl shadow mt-0 ${
										item.recommended ? "" : "md:mt-10"
									}`}>
									<div
										className={`bg-blue-700 text-white px-5 py-2 text-center ${
											item.recommended ? "" : "hidden"
										}`}>
										Plan recomendado
									</div>
									<div className="px-5 py-5 flex flex-col items-center">
										<p className="text-blue-700 text-2xl font-bold">Internet Hogar</p>
										<h5 className="text-orange-500 text-5xl font-extrabold mb-2">
											{item.mbps}Mbps
										</h5>
										<span className="text-blue-700 text-lg font-semibold mb-4">
											<strong>s/{item.price}.00 </strong>
											al mes
										</span>
										<div className="w-full bg-blue-200 rounded-2xl p-4 mb-6">
											<ul className="flex flex-col gap-3 text-blue-800 font-semibold">
												<li className="flex gap-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="w-6 h-6">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													100% Fibra óptica
												</li>
												<li className="flex gap-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="w-6 h-6">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													Internet ilimitado y simétrico
												</li>
												<li className="flex gap-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														className="w-6 h-6">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													Router wifi
												</li>
											</ul>
										</div>
										<div>
											<button className="flex gap-1 bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-orange-500 shadow-sm hover:-translate-y-1 transition">
												Me interesa
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="w-6 h-6">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
													/>
												</svg>
											</button>
										</div>
									</div>
								</article>
							))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Plans;
