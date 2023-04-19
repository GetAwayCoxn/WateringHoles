import { useContext } from "react";
import { LocationContext } from "../App";

export function CitySearch() {
	const { loc } = useContext(LocationContext);
	return (
		<div>
			<h1>
				Results in {loc.city}, {loc.region}
			</h1>
		</div>
	);
}
