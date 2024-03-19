import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar />
				</header>
				<main>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
