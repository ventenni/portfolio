import React from 'react';

import '../../styles/components/Nav--clean.scss';

// Reactstrap Components
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const SiteNav = (props) => { 
	return (
		<Navbar light className="nav-clean">
			<Nav navbar>
				<div className="navbar-left-side">
					<NavbarBrand>
						<img src="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/41684329_2023915690993422_833039603190464512_o.jpg?_nc_cat=101&_nc_ohc=BZY1imwT9CYAX_ZbVJb&_nc_ht=scontent.fbne5-1.fna&oh=e74dc3c11c760e7a0bf87dbac04c1574&oe=5E9DA325" height="100px" width="100px" alt="Logo" />
					</NavbarBrand>
				</div>

				<div className="navbar-right-side">
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
				</div>
			</Nav>
		</Navbar>
	)
}

export default SiteNav;