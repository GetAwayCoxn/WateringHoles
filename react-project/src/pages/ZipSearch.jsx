import { useContext } from "react";
import { LocationContext } from "../App";
import { axAddFavorite, axGetZipFromParams } from "../Utilities";
import { useLoaderData } from "react-router-dom";

export async function ZipLoader({ params }) {
	return await axGetZipFromParams(params.zip);
}

export function ZipSearch() {
	const { loc } = useContext(LocationContext);
	const breweries = useLoaderData();

	return (
		<div>
			<h1>Results in my Zip Code {loc.zip}</h1>
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
		</div>
	);
}
