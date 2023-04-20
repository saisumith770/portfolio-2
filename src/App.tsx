import Loader from "components/organisms/Loader";
import Nav from "components/organisms/Nav";
import Socials from "components/organisms/Socials";
import Mail from "components/organisms/Mail";
import { useAfter } from "hooks";
import Introduction from "pages/Introduction";
import { About } from "pages/About";
import Experience from "pages/Experience";
import Contact from "pages/Contact";
import Work from "pages/Work";

function App() {
	const loadPage = useAfter(true, 2000);
	if (!loadPage) return <Loader />;

	return (
		<div className="bg-background w-screen h-[740vh] lg:h-[640vh]">
			<Nav />
			<Socials />
			<Mail />

			<Introduction />
			<About />
			<Experience />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
