import { useContext } from "react";
import { UserContext } from "../App";
import { useLoaderData } from "react-router-dom";
import { axProfileLoader } from "../Utilities";

export const ProfileLoader = async ({ params }) => {
	const usernameLower = axProfileLoader(params.user.toLowerCase());
	return usernameLower;
};

export const Profile = () => {
	const user = useLoaderData();
	return (
		<div>
			<h1>Profile for {user}</h1>
		</div>
	);
};
