import { Container } from "../../../../layouts";

const Footer = () => {
	return (
		<footer id="footer" className="bg-blue-800 py-6 lg:py-8">
			<Container>
				<div className="flex justify-between text-blue-300">
					<p className="underline hover:text-blue-100 cursor-pointer">
						Políticas de Privacidad
					</p>
					<span>© 2022 Paramenta. Todos los derechos reservados.</span>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
