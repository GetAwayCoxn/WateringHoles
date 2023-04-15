import { useContext } from "react";
import { axLogin } from "../Utilities";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const UpdateUser = async (e, setUser, nav) => {
	e.preventDefault();
	let found = await axLogin(e.target[0].value, e.target[1].value, setUser);
	if (found) {
		// setTimeout(() => {
		nav("/");
		// }, 1000)
	}
};

export function Login() {
	const { setUser } = useContext(UserContext);
	const nav = useNavigate();
	return (
		<div>
			<h1>Login Page</h1>

			<form className="m-2" onSubmit={(e) => UpdateUser(e, setUser, nav)}>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button className="btn btn-primary" type="submit">
					Log In
				</button>
			</form>
		</div>
	);
}
