import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

export function Home() {
	const { user } = useContext(UserContext);

	return (
		<div>
			{user ? (
				<h1> Welcome {user}!</h1>
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
