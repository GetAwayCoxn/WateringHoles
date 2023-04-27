import { useContext, useState } from "react";
import { CitySearch } from "./CitySearch";
import { ClosestSearch } from "./ClosestSearch";
import { StateSearch } from "./StateSearch";
import { ZipSearch } from "./ZipSearch";
import { axGetSearchFromParams } from "../Utilities";
import { LocationContext } from "../App";

export function Search({ type }) {
	const { loc } = useContext(LocationContext);
	const [breweries, setBreweries] = useState(null);

	const HandleSearch = async (e) => {
		e.preventDefault();
		const r = await axGetSearchFromParams(e.target[0].value);
		setBreweries(r);
	};

	if (type) {
		if (type == "closest") {
			return <ClosestSearch />;
		} else if (type == "zip") {
			return <ZipSearch />;
		} else if (type == "city") {
			return <CitySearch />;
		} else if (type == "state") {
			return <StateSearch />;
		}
	}
	return (
		<div>
			<h1>Seach by Name</h1>
			{breweries ? (
				<div className="container text-align-center">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Website</th>
								<th scope="col">Phone</th>
								<th scope="col">Address</th>
								<th scope="col">Add Favorite</th>
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
											onClick={() => axAddFavorite(brewery)}
											className="btn btn-primary"
										>
											Add
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<button
						className="btn btn-primary"
						onClick={() => setBreweries(null)}
					>
						Search Again
					</button>
				</div>
			) : (
				<div>
					<hr />
					<form onSubmit={(e) => HandleSearch(e)}>
						<input type="text" placeholder="enter brewery name to search for" />
						<button className="btn btn-primary m-3" type="submit">Search</button>
					</form>
				</div>
			)}
		</div>
	);
}
