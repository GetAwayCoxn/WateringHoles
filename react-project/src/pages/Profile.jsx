import { useLoaderData } from "react-router-dom";
import { axProfileLoader, axUpdateUser } from "../Utilities";
import { useState } from "react";

export const ProfileLoader = async ({ params }) => {
	const profile = await axProfileLoader(params.user);
	return profile;
};

export const Profile = () => {
	const profile = useLoaderData();
	const [first, setFirst] = useState(profile.first_name);
	const [last, setLast] = useState(profile.last_name);
	const [email, setEmail] = useState(profile.email);
	const [currPassword, setCurrPassword] = useState(null);
	const [password1, setPassword1] = useState(null);
	const [password2, setPassword2] = useState(null);

	const UpdateUser = async (
		username,
		first,
		last,
		email,
		currPassword,
		password1,
		password2
	) => {
        if (password1 && password1 !== password2) {
            // handle mis match password update
            $("#mismatchModal").modal("show");
        } else if (password1 && !currPassword) {
            // handle missing curr password
            $("#missingPasswordModal").modal("show");
        } else {
            // axios call to update the user profile in django
			const r = await axUpdateUser(
				username,
				first,
				last,
				email,
				currPassword,
			);
			r.success
				? console.log("updated user")
				: console.log("failed to update user");
		}
	};

	return (
		<div className="container text-align-center mt-5">
			<div className="row justify-content-evenly">
				<div className="col-3">
					<div className="card">
						<img
							src="/static/profile-icon.png"
							alt="Placeholder for profile picture"
						/>
						<h3 className="text-capitalize">{profile.username}</h3>
						<p className="established-text">Est: {profile.date_created}</p>
					</div>
				</div>
				<div className="col-9">
					<form
						className="row g-1 justify-content-center"
						onSubmit={(e) => [
							e.preventDefault(),
							UpdateUser(
								profile.username,
								first,
								last,
								email,
								currPassword,
								password1,
								password2
							),
						]}
					>
						<div class="form-floating mb-3 col-6">
							<input
								type="text"
								class="form-control"
								id="FirstNameInput"
								placeholder="First Name"
								value={first}
								onChange={(e) => setFirst(e.target.value)}
							/>
							<label for="FirstNameInput">First Name</label>
						</div>
						<div class="form-floating mb-3 col-6">
							<input
								type="text"
								class="form-control"
								id="LastNameInput"
								placeholder="Last Name"
								value={last}
								onChange={(e) => setLast(e.target.value)}
							/>
							<label for="LastNameInput">Last Name</label>
						</div>
						<div class="form-floating mb-3 col-12">
							<input
								type="email"
								class="form-control"
								id="EmailInput"
								placeholder="email@email.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label for="EmailInput">Email</label>
						</div>
						<div class="form-floating col-5 mb-3">
							<input
								type="password"
								class="form-control"
								id="PasswordInput"
								placeholder="Example password placeholder"
								value={currPassword}
								onChange={(e) => setCurrPassword(e.target.value)}
								// required
							/>
							<label for="PasswordInput" class="form-label">
								Current Password
							</label>
						</div>
						<div class="form-floating col-5 mb-3">
							<input
								type="password"
								class="form-control"
								id="PasswordInput"
								placeholder="Example password placeholder"
								value={password1}
								onChange={(e) => setPassword1(e.target.value)}
								// required
							/>
							<label for="PasswordInput" class="form-label">
								New Password
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
								// required
							/>
							<label for="PasswordConfirm" class="form-label">
								Confirm Password
							</label>
						</div>
						<div className="col-3 mb-3">
							<button className="btn btn-lg btn-primary">Save Changes</button>
						</div>
					</form>
				</div>
            </div>
            <div class="modal fade" id="mismatchModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Watering Holes Notificaion</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Your new passwords do not match
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Go Back</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="missingPasswordModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Watering Holes Notificaion</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        If you trying to update your password, you must enter your current password as well
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Go Back</button>
                    </div>
                    </div>
                </div>
            </div>
		</div>
	);
};
