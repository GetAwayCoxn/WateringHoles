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

export const axUpdateUser = async (
	username,
	first,
	last,
	email,
	currPassword,
) => {
	const r = await axios.post("/update/", {
		username: username,
		first: first,
		last: last,
		email: email,
		currPassword: currPassword,
	});
	return r.data;
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

export const axUserLoader = async () => {
	const r = await axios.get("/user/", {});
	return r.data.username;
};

export const axProfileLoader = async (username) => {
	const r = await axios.get(`/profile/${username}`);
	return r.data;
};

export const axGetLocationLoader = async () => {
	const r = await axios.get("http://ip-api.com/json/");
	return r.data;
};

export const axGetCityFromParams = async (city) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}`;
	const r = await axios.get(sStr);
	return r.data;
};

export const axGetZipFromParams = async (zip) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries?by_postal=${zip}`;
	const r = await axios.get(sStr);
	return r.data;
};

export const axGetStateFromParams = async (st) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries?by_state=${st}`;
	const r = await axios.get(sStr);
	return r.data;
};

export const axGetClosestFromParams = async (lat, lon) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries?by_dist=${lat},${lon}`;
	const r = await axios.get(sStr);
	return r.data;
};

export const axGetSearchFromParams = async (str) => {
	const sStr = `https://api.openbrewerydb.org/v1/breweries/search?query=${str}`;
	const r = await axios.get(sStr);
	return r.data;
};

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
