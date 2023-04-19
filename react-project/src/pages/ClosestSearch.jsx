import { useContext } from "react";
import { LocationContext } from "../App";

export function ClosestSearch() {
	const { loc } = useContext(LocationContext);
	return (
		<div>
            <h1>Results Near Lat: {loc.lat} Lon: {loc.lon}</h1>
		</div>
	);
}
