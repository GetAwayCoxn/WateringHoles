import { createBrowserRouter } from "react-router-dom";
import App, {AppLoader} from "./App";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";
import { CityLoader } from "./pages/CitySearch";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: AppLoader,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/register/",
				element: <Register />,
			},
			{
				path: "/login/",
				element: <Login />,
			},
			{
				path: "/search/",
				element: <Search type={null} />,
			},
			{
				path: "/closest/",
				element: <Search type={"closest"} />,
			},
			{
				path: "/zip/",
				element: <Search type={"zip"} />,
			},
			{
				path: "/city/:city",
				element: <Search type={"city"} />,
				loader: CityLoader,
			},
			{
				path: "/state/",
				element: <Search type={"state"} />,
			},
		],
	},
]);

export default Router;
