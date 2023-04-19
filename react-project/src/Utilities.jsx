import axios from "axios";

export const axRegister = async (username, password, email, setUser) => {
	const r = await axios.post("/register/", {
		username: username,
		email: email,
		password: password,
	});
	setUser(r.data.username);
	return r.data.username;
};

export const axLogin = async (username, password, setUser) => {
	const r = await axios.post("/login/", {
		username: username,
		password: password,
	});
	setUser(r.data.username);
	return r.data.username;
};

export const axLogout = async (setUser) => {
	const r = await axios.post("/logout/", {});
	setUser(null);
};

export const axUser = async (setUser) => {
	const r = await axios.get("/user/", {});
	setUser(r.data.username);
	return r.data.username;
};

export const axGetLocation = async (setLoc) => {
	const r = await axios.get("http://ip-api.com/json/");
	// console.log("axGetLoc: ", r.data);
	setLoc(r.data);
	return r.data;
};

export const axUserLoader = async () => {
	const r = await axios.get("/user/", {});
	return r.data.username;
};

export const axGetLocationLoader = async () => {
	const r = await axios.get("http://ip-api.com/json/");
	return r.data;
};

export const axGetCity = async (city, n, setBreweries) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${n}`
	const r = await axios.get(sStr)
	console.log('axGetCity: ', r.data)
	const spreadData = r.data.map(i => {
		return {...i}})
	setBreweries([...spreadData])
	return r.data
}

export const axGetCityFromParams = async (city) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=10`
	const r = await axios.get(sStr)
	return r.data
}

export const getToken = () => {
	function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
	const csrftoken = getCookie("csrftoken");

	axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
};
