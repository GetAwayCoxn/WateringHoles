import { useContext } from "react";
import { LocationContext, UserContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { axLogout } from "../Utilities";

export const NavBar = () => {
	const { user, setUser } = useContext(UserContext);
	const { loc } = useContext(LocationContext);
	const nav = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img
						src="/static/beer-icon.svg"
						alt="Watering Holes Logo"
						width="30"
						height="24"
						class="d-inline-block align-text-top"
					></img>
					Watering Holes
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{user && (
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Search
								</a>
								<ul className="dropdown-menu">
									<li>
										<Link
											className="dropdown-item"
											to={`/closest/${loc.lat}/${loc.lon}`}
										>
											Close to me
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to={`/zip/${loc.zip}`}>
											In my zip code
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to={`/city/${loc.city}/`}>
											In my city
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to={`/state/${loc.regionName}`}
										>
											In my state
										</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link className="dropdown-item" to="/search/">
											Search by Name
										</Link>
									</li>
								</ul>
							</li>
						)}
					</ul>
					{user ? (
						<div>
							<ul class="navbar-nav">
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{user}
									</a>
									<ul class="dropdown-menu">
										<li>
											<Link class="dropdown-item" to={`/profile/${user}`}>
												Profile
											</Link>
										</li>
										{/* <li>
											<Link class="dropdown-item" to="#">
												Another action
											</Link>
										</li> */}
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<button
												className="btn btn-primary m-2"
												type="button"
												onClick={() => [axLogout(setUser), nav("/")]}
											>
												Logout
											</button>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					) : (
						<Link to="/login/">
							<button className="btn btn-primary m-2" type="button">
								Login
							</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};
