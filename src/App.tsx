import Loader from "components/organisms/Loader";
import Nav from "components/organisms/Nav";
import { useAfter } from "hooks";

function App() {
	const loadPage = useAfter(true, 2000);
	return (
		<div className="bg-background w-screen h-screen">
			{!loadPage && <Loader />}
			{loadPage && <Nav />}
		</div>
	);
}

export default App;
