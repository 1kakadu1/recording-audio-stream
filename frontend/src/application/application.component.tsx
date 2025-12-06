import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
//import { HomePage } from '@/pages/home';
function Application() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/about"
					element={<AboutPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default Application;
