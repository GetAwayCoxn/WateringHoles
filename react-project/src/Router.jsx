import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
				path: "/city/",
				element: <Search type={"city"} />,
			},
			{
				path: "/state/",
				element: <Search type={"state"} />,
			},
		],
	},
]);

export default Router;
