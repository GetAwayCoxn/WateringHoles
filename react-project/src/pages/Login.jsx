import { useContext } from "react";
import { axLogin } from "../Utilities";
import { UserContext } from "../App";

const UpdateUser = (e, setUser) => {
	e.preventDefault();
	axLogin(e.target[0].value, e.target[1].value, setUser);
};

export function Login() {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<h1>Login Page</h1>

			<form className="m-2" onSubmit={(e) => UpdateUser(e, setUser)}>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button className="btn btn-primary" type="submit">
					Log In
				</button>
			</form>
		</div>
	);
}
