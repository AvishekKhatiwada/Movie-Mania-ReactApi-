import Details from './Details';
import MovieLists from './MovieLists';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MovieLists />} />
				<Route path='/details/:id' element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
