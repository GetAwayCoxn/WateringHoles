import { useContext } from "react";
import { UserContext, LocationContext } from "../App";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { axDeleteFavorite, axGetFavorites } from "../Utilities";

export async function HomeLoader() {
	return await axGetFavorites();
}

export function Home() {
	const { user } = useContext(UserContext);
	const { loc } = useContext(LocationContext);
	const breweries = useLoaderData();
	const nav = useNavigate();

	return (
		<div>
			{user ? (
				<div>
					<h1 className="text-capitalize"> Welcome {user}!</h1>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Website</th>
								<th scope="col">Phone</th>
								<th scope="col">Address</th>
								<th scope="col">Delete Favorite</th>
							</tr>
						</thead>
						<tbody>
							{breweries.map((brewery) => (
								<tr>
									<th scope="row">{brewery.name}</th>
									<td>
										<a href={brewery.website_url} target="_blank">
											{brewery.website_url}
										</a>
									</td>
									<td>{brewery.phone}</td>
									<td>
										{brewery.address_1} <br /> {brewery.city}, {loc.region}{" "}
										{brewery.postal_code}
									</td>
									<td>
										<button
											onClick={() => axDeleteFavorite(brewery)}
											// onClick={() => [axDeleteFavorite(brewery), nav('/')]}
											className="btn btn-primary"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
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
