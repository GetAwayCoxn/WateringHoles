import { createBrowserRouter } from "react-router-dom";
import App, {AppLoader} from "./App";
import { Register } from "./pages/Register";
import { Home, HomeLoader } from "./pages/Home";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";
import { CityLoader } from "./pages/CitySearch";
import { ZipLoader } from "./pages/ZipSearch";
import { StateLoader } from "./pages/StateSearch";
import { ClosestLoader } from "./pages/ClosestSearch";
import { Profile, ProfileLoader } from "./pages/Profile";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: AppLoader,
		children: [
			{
				index: true,
				element: <Home />,
				loader: HomeLoader,
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
				path: "/search/:search?",
				element: <Search type={null} />,
			},
			{
				path: "/closest/:lat/:lon",
				element: <Search type={"closest"} />,
				loader: ClosestLoader,
			},
			{
				path: "/zip/:zip",
				element: <Search type={"zip"} />,
				loader: ZipLoader,
			},
			{
				path: "/city/:city",
				element: <Search type={"city"} />,
				loader: CityLoader,
			},
			{
				path: "/state/:st",
				element: <Search type={"state"} />,
				loader: StateLoader,
			},
			{
				path: "/profile/:user",
				element: <Profile />,
				loader: ProfileLoader,
			},
		],
	},
]);

export default Router;
