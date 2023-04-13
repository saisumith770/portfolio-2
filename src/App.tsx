import Loader from "components/organisms/Loader";
import Nav from "components/organisms/Nav";
import Socials from "components/organisms/Socials";
import Mail from "components/organisms/Mail";
import { useAfter } from "hooks";

function App() {
	const loadPage = useAfter(true, 2000);
	if (!loadPage) return <Loader />;

	return (
		<div className="bg-background w-screen h-screen">
			<Nav />
			<Socials />
			<Mail />
		</div>
	);
}

export default App;
