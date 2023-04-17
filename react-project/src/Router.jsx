import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

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
		],
	},
]);

export default Router;
