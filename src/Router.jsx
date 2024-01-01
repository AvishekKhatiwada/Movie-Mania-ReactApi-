import Details from './Details';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/details/:id' element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
