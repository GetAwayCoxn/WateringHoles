import {CitySearch} from "./CitySearch";
import {ClosestSearch} from "./ClosestSearch";
import {StateSearch} from "./StateSearch";
import {ZipSearch} from "./ZipSearch";

export function Search({ type }) {

	const HandleSearch = (e) => {
		e.preventDefault()
	}

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
			<hr />
			<form onSubmit={() => HandleSearch(e)}>
				<input type="text" placeholder="enter brewery name to search for" />
				<button type="submit">Search</button>
			</form>
		</div>
	);
}
