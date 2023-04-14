import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { axUser, getToken } from "./Utilities";

export const UserContext = createContext(null);

export default function App() {
	const [user, setUser] = useState(null);
	
	getToken();

	useEffect(() => {
		const userData = async () => {
			setUser(await axUser());
		};
		userData();
	}, []);

	return (
		<div className="App">
			<UserContext.Provider value={{user, setUser}}>
				<NavBar />
				
				<Outlet />
			</UserContext.Provider>
		</div>
	);
}
