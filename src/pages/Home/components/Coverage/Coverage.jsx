import { Container } from "../../../../layouts";
import coverageImage from "../../../../assets/coverage-image.jpg";

const Coverage = () => {
	return (
		<section className="py-12 sm:py-10 lg:py-12 mb-10">
			<Container>
				<div className="flex flex-col items-center">
					<div className="mb-8">
						<h2 className="text-blue-600 text-center font-extrabold text-4xl md:text-5xl mb-2">
							Revisa nuestra cobertura
						</h2>
						<p className="text-sky-500 text-center font-bold text-2xl md:text-3xl">
							Ahora abarcamos más zonas
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 w-4/5 md:w-3/4 lg:w-3/5 gap-5">
						<div className="bg-blue-700 p-8 rounded-2xl text-center flex flex-col justify-between shadow">
							<p className="text-blue-50 font-bold text-3xl mx-6 mb-7">
								Busca si <br /> tu domicilio <br />
								se encuentra <br />
								dentro de <br />
								nuestra cobertura.
							</p>
							<div>
								<input
									type="text"
									autoComplete="email"
									placeholder="Busca tu zona"
									className="block w-full px-5 py-3 text-base text-stone-600 placeholder-stone-500 transition duration-200 ease-in-out transform border border-transparent rounded-lg bg-blue-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-300 shadow"
								/>
								<button className="text-blue-100 underline mt-4">
									Más información
								</button>
							</div>
						</div>
						<div className="rounded-2xl border-2 border-blue-200 shadow overflow-hidden">
							<img
								src={coverageImage}
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Coverage;
