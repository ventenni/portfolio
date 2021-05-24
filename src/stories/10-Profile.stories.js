import React from 'react';

// Components
import ProfileCardV2 from './../views/components/ProfileCardV2';

// Layout
import OneColumn from './../views/layouts/OneColumn';

export default {
    title: "Profiles"
};

export const profileCardV2 = () => {
    return (
        <OneColumn>
            <ProfileCardV2 />
        </OneColumn>
    )
};