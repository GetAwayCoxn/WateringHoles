import { createHashRouter } from "react-router-dom";
import App from "./App";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";

const Router = createHashRouter(
	[
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
					path: "/logout/",
					element: <Logout />,
				},
			],
		},
	]
);

export default Router;
