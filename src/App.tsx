import Loader from "components/organisms/Loader";
import Nav from "components/organisms/Nav";
import Socials from "components/organisms/Socials";
import Mail from "components/organisms/Mail";
import { useAfter } from "hooks";
import Introduction from "pages/Introduction";
import { About } from "pages/About";
import Experience from "pages/Experience";
import Contact from "pages/Contact";

function App() {
	const loadPage = useAfter(true, 2000);
	if (!loadPage) return <Loader />;

	return (
		<div className="bg-background w-screen h-[480vh] lg:h-[380vh]">
			<Nav />
			<Socials />
			<Mail />

			<Introduction />
			<About />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
