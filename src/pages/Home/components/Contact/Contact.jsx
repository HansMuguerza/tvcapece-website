import { Container } from "../../../../layouts";

const Contact = () => {
	return (
		<section id="contact" className="bg-blue-700 py-20 sm:py-10 lg:py-12">
			<Container>
				<div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-4xl font-extrabold leading-tight text-blue-50 md:text-5xl">
							Contáctanos
						</h2>
						<p className="mt-3 text-xl font-semibold leading-relaxed text-sky-300 md:mt-5">
							Llámanos, escríbenos o visítanos y te daremos más información sobre
							nuestras ofertas y precios.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-14 sm:gap-x-8 md:grid-cols-3">
						<div className="flex flex-col items-center">
							<div className="font-bold text-7xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-10 h-10 text-orange-500">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							</div>
							<div>
								<p className="mt-4 text-xl font-bold text-blue-50">Tel. 064 415 157</p>
								<p className="text-base mt-0.5 text-sky-300">Nuestro teléfono</p>
							</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="font-bold text-7xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-10 h-10 text-orange-500">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
									/>
								</svg>
							</div>
							<p className="mt-4 text-xl font-bold text-blue-50">Cel. 957 729 033</p>
							<p className="text-base mt-0.5 text-sky-300">Nuestro whatsapp</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="font-bold text-7xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-10 h-10 text-orange-500">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
									/>
								</svg>
							</div>
							<p className="mt-4 text-xl font-semibold text-blue-50">
								San Ramón, Jr. Apurimac con Jr. Orquideas
							</p>
							<p className="text-base mt-0.5 text-sky-300">
								Nuestro punto de atención
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
