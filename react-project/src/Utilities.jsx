import axios from "axios";

export const axRegister = async (username, password, email) => {
	let r = await axios.post("/register/", {
		username: username,
		email: email,
		password: password,
	});

	return r.data.success;
};

export const axLogin = async (username, password, setUser) => {
	let r = await axios.post("/login/", {
		username: username,
		password: password,
	});
	// console.log(r.data);
	setUser(() => r.data);
};

export const axLogout = async (setUser) => {
	let r = await axios.post("/logout/", {});

	setUser(() => null);
};

export const axUser = async () => {
	let r = await axios.get("/user/", {});

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
