import Footer from "../../components/Footer/Footer";
import Hero from "../Hero/Hero";

const LandingPage = () => {
	return (
		<div>
			<Hero mystyle={style} />
			<Footer />
		</div>
	);
};
const style = {
	border: ".1px solid grey",
};

export default LandingPage;
