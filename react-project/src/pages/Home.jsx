import { useContext } from "react"
import { UserContext } from "../App"
import { Link } from "react-router-dom";

export function Home() {
    const { user, setUser } = useContext(UserContext)
    console.log("home", user)
    return (
			<div>
				{/* {user ? (
					<h1>{user.username}</h1>
				) : ( */}
				<div className="card">
					<h1>Welcome to Watering Holes</h1>
					<Link to="/login/">
						<button className="btn btn-primary w-25 m-4" type="button">
							Log In
						</button>
					</Link>
					<br />
					<p>Or register for a new account</p>
					<Link to="/register/">
						<button className="btn btn-primary m-2" type="button">
							Register
						</button>
					</Link>
				</div>
				{/* )} */}
			</div>
		);
}