import { useContext } from "react";
import { LocationContext } from "../App";
import { axGetZipFromParams } from "../Utilities";
import { useLoaderData } from "react-router-dom";

export async function ZipLoader({ params }) {
	const r = await axGetZipFromParams(params.zip);
	return r;
}

export function ZipSearch() {
	const { loc } = useContext(LocationContext);
	const breweries = useLoaderData();
	console.log(breweries);
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
								<button className="btn btn-primary">Add</button>
							</td>
						</tr>
					))}
					{/* <tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colspan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}
