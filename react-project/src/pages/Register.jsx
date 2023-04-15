import { useContext, useEffect, useState } from "react";
import { axRegister } from "../Utilities";
import { UserContext } from "../App";

const Register_User = (username, email, password, password2, setUser) => {
	console.log("REG: ", username,email,password,password2)
	if (password !== password2) {
		console.log("passwords dont match")
	} else {
		const Set_User = async () => {
			let r = await axRegister(username, email, password, setUser)
			console.log("setuser resp: ", r.data)
		}
		Set_User()
	}
};

export function Register() {
	const { user, setUser } = useContext(UserContext);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");

	// useEffect(() => {
	// 	// console.log(username, email, password, password2)
	// }, [username, email, password, password2]);

	return (
		<div>
			<h1 className="m-3">Register New User</h1>
			<form
				className="row g-1 justify-content-center"
				onSubmit={(e) => [
					e.preventDefault(),
					Register_User(username, email, password, password2, setUser),
					// setUsername(""),
					// setEmail(""),
					// setPassword(""),
					// setPassword2(""),
				]}
			>
				<div class="form-floating mb-3 col-6">
					<input
						type="text"
						class="form-control"
						id="UsernameInput"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<label for="UsernameInput">Username</label>
				</div>
				<div class="form-floating mb-3 col-12">
					<input
						type="email"
						class="form-control"
						id="EmailInput"
						placeholder="email@email.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label for="EmailInput">Email</label>
				</div>
				<div class="form-floating col-5 mb-3">
					<input
						type="password"
						class="form-control"
						id="PasswordInput"
						placeholder="Example password placeholder"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<label for="PasswordInput" class="form-label">
						Password
					</label>
				</div>
				<div class="form-floating col-5 mb-3">
					<input
						type="password"
						class="form-control"
						id="PasswordConfirm"
						placeholder="Another password placeholder"
						value={password2}
						onChange={(e) => setPassword2(e.target.value)}
						required
					/>
					<label for="PasswordConfirm" class="form-label">
						Confirm Password
					</label>
				</div>
				<div className="col-3 mb-3">
					<button className="btn btn-lg btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
}
