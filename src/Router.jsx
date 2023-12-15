import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MovieLists from './MovieLists';
import Details from './Details';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MovieLists />}>
			<Route path='/details/:id' element={<Details />} />
			{/* ... etc. */}
		</Route>
	)
);
