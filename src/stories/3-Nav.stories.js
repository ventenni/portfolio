import React from 'react';

// Components
import NavMiddleOut from '../views/components/Nav--MiddleOut';
import NavClean from '../views/components/Nav--Clean';

// Images
import Logo from './../assets/images/drawing.svg';

export default {
    title: "Navbars"
};

const navItems = {
    logo: Logo,
    navLinks: [
        {
            text: "Link 1",
            link: "/link1"
        },
        {
            text: "Link 2",
            link: "/link2"
        },
        {
            text: "Link 3",
            link: "/link3"
        },
        {
            text: "Link 4",
            link: "/link4"
        },
    ]
}

export const MiddleOutNav = () => <NavMiddleOut navItems={navItems} />;
export const CleanNav = () => <NavClean navItems={navItems} />;