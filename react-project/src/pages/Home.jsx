import { useContext, useEffect } from "react";
import { UserContext, LocationContext } from "../App";
import { Link } from "react-router-dom";

export function Home() {
	const { user } = useContext(UserContext);
	const { loc } = useContext(LocationContext);
	console.log("home loc: ", loc)
	
	return (
		<div>
			{user ? (
				<div>
					<h1> Welcome {user}!</h1>
					{/* <p>{loc.lat}</p> */}
					{/* <p>{loc.long}</p> */}
				</div>
			) : (
				<div className="card">
					<h1>Welcome to Watering Holes</h1>
					<Link to="/login/">
						<button className="btn btn-primary w-25 m-4" type="button">
							Log In
						</button>
					</Link>
					<br />
					<h6>Or register for a new account</h6>
					<Link to="/register/">
						<button className="btn btn-primary" type="button">
							Register
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}
