import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { axUser, getToken, axGetLocation } from "./Utilities";

export const UserContext = createContext(null);
export const LocationContext = createContext(null);

export default function App() {
	const [user, setUser] = useState(null);
	const [loc, setLoc] = useState(null);

	getToken();

	useEffect(() => {
		const getLoc = async () => {
			const l = await axGetLocation(setLoc);
		};
		getLoc();

		const userData = async () => {
			const r = await axUser(setUser);
		};
		userData();
	}, []);

	return (
		<div className="App">
			<UserContext.Provider value={{ user, setUser }}>
				<NavBar />

				<LocationContext.Provider value={{ loc, setLoc }}>
					<Outlet />
				</LocationContext.Provider>
			</UserContext.Provider>
		</div>
	);
}
