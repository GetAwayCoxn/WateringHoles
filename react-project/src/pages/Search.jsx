import {CitySearch} from "../components/CitySearch";
import {ClosestSearch} from "../components/ClosestSearch";
import {StateSearch} from "../components/StateSearch";
import {ZipSearch} from "../components/ZipSearch";

export function Search({ type }) {

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
		</div>
	);
}
