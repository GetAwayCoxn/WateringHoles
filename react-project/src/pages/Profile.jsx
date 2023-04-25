import { useLoaderData } from "react-router-dom";
import { axProfileLoader } from "../Utilities";

export const ProfileLoader = async ({ params }) => {
    const profile = await axProfileLoader(params.user.toLowerCase());
	return profile
};

export const Profile = () => {
	const profile = useLoaderData();
	return (
		<div>
			<h1>Profile for {profile.username}</h1>
		</div>
	);
};
