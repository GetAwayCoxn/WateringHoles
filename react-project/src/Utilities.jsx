import axios from "axios";

export const axRegister = async (username, password, email, setUser) => {

	let r = await axios.post("/register/", {
		username: username,
		email: email,
		password: password,
	});
	console.log("axios reg: ", r.data.success)
	if (r.data.success) {
		setUser({'username':username, 'email': email})
	}

	return r.data.success;
};

export const axLogin = async (username, password, setUser) => {
	// let lo = await axLogout(setUser)
	let r = await axios.post("/login/", {
		username: username,
		password: password,
	});
	if (!r.data.login) {
		setUser({'username': username});
		console.log("axios login: ", r.data);
		return true
	} else {
		setUser(() => null);
		console.log("axios login: ", r.data.login);
		return false
	}

};

export const axLogout = async (setUser) => {
	let r = await axios.post("/logout/", {});

	setUser(() => null);
};

export const axUser = async (setUser) => {
	let r = await axios.get("/user/", {});
	console.log("USER AXIOS: ", r.data)
	setUser(r.data.username)
	return r.data.username
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
