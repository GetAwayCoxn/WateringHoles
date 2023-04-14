import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

export function Logout() {
    const { user, setUser } = useContext(UserContext)
    console.log(user)
	return (
		<div className="card">
			<h1>Until next time!</h1>
			<Link to="/login/">
				<button className="btn btn-primary w-25 m-4" type="button">
					Log In Again
				</button>
			</Link>
		</div>
	);
}