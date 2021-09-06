import IPSearch from "./components/IPSearch";
import "./App.css";

function App() {
	// RESET URL ON PAGE REFRESH
	const atOrigin = `${window.location.origin}/`;
	const currentWindow = window.location.href;
	if (currentWindow !== atOrigin) window.location.replace(atOrigin);

	return (
		<div className="App">
			<header className="App-header">IP Address Info Search</header>
			<IPSearch />
		</div>
	);
}

export default App;
