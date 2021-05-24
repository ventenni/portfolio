import React from "react";

// Components
import ProfileCoverCard from "./../views/components/ProfileCoverCard";
import ProfileCardV2 from "./../views/components/ProfileCardV2";

// Layout
import OneColumn from "./../views/layouts/OneColumn";

// Images
import placeholderImage from "../assets/images/Cygnet 2.jpg";

export default {
	title: "Profiles",
};

export const profileCardV2 = () => {
	return (
		<OneColumn>
			<ProfileCardV2 />
		</OneColumn>
	);
};

export const profileCoverCard = () => {
	return <ProfileCoverCard profileImage={placeholderImage} />;
};
