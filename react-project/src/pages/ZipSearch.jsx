import { useContext } from "react";
import { LocationContext } from "../App";

export function ZipSearch() {
    const { loc } = useContext(LocationContext);
	return (
		<div>
            <h1>Results in my Zip Code {loc.zip}</h1>
		</div>
	);
}
