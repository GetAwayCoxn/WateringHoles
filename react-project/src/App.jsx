import { useState, createContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { getToken, axGetLocationLoader, axUserLoader } from "./Utilities";

export const UserContext = createContext(null);
export const LocationContext = createContext(null);

export async function AppLoader() {
	const l = await axGetLocationLoader();
	const u = await axUserLoader();

	return [l,u]
}

export default function App() {
	const lData = useLoaderData()
	const [loc, setLoc] = useState({...lData[0]});
	const [user, setUser] = useState(lData[1]);
	
	getToken();

	return (
		<div className="App">
			<UserContext.Provider value={{ user, setUser }}>
				<LocationContext.Provider value={{ loc, setLoc }}>
					<NavBar />
					<Outlet />
				</LocationContext.Provider>
			</UserContext.Provider>
		</div>
	);
}
