import { useContext } from "react";
import { LocationContext } from "../App";

export function StateSearch() {
	const { loc } = useContext(LocationContext);
	return (
		<div>
			<h1>Results in {loc.regionName}</h1>
		</div>
	);
}
